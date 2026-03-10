import express from "express";
import { SitemapStream, streamToPromise } from "sitemap";
import Insights from "../Models/InsightsModel.js";

const sitemapRouter = express.Router();

sitemapRouter.get("/sitemap.xml", async (req, res) => {
    try {
        const hostname = "http://localhost:8009"; // Change to your production domain when deploying
        const sitemap = new SitemapStream({ hostname });

        // STATIC PAGES
        sitemap.write({ url: "/", changefreq: "daily", priority: 1.0 });
        sitemap.write({ url: "/AboutUsDetail", changefreq: "monthly", priority: 0.8 });
        sitemap.write({ url: "/GetPricingDetail", changefreq: "monthly", priority: 0.8 });
        sitemap.write({ url: "/GetInsightsDetails", changefreq: "weekly", priority: 0.8 });
        sitemap.write({ url: "/GetCompanyCalture", changefreq: "monthly", priority: 0.7 });
        sitemap.write({ url: "/GetContactUs", changefreq: "monthly", priority: 0.7 });
        sitemap.write({ url: "/GetConsultation", changefreq: "monthly", priority: 0.7 });
        sitemap.write({ url: "/GetFAQs", changefreq: "monthly", priority: 0.6 });
        sitemap.write({ url: "/IndustriesServicesHeaders", changefreq: "monthly", priority: 0.7 });

        // STATIC INDUSTRY PAGES
        sitemap.write({ url: "/GetIndustrydetailByName/Telecommunication", changefreq: "monthly", priority: 0.7 });
        sitemap.write({ url: "/GetIndustrydetailByName/Information%20Technology", changefreq: "monthly", priority: 0.7 });
        sitemap.write({ url: "/GetIndustrydetailByName/Education", changefreq: "monthly", priority: 0.7 });
        sitemap.write({ url: "/GetIndustrydetailByName/Healthcare", changefreq: "monthly", priority: 0.7 });

        // DYNAMIC: Insight Article Pages (auto-updates as new insights are added)
        try {
            const insightDocs = await Insights.find({});
            insightDocs.forEach((doc) => {
                (doc.InsightCards || []).forEach((card, index) => {
                    sitemap.write({
                        url: `/GetArticalInsights/${index}/${card.UserId || "unknown"}`,
                        changefreq: "weekly",
                        priority: 0.7,
                    });
                });
            });
        } catch (err) {
            console.log("Sitemap: Error fetching insights", err.message);
        }

        sitemap.end();

        const xml = await streamToPromise(sitemap);
        res.header("Content-Type", "application/xml");
        res.send(xml);
    } catch (err) {
        console.error("Error generating sitemap:", err);
        res.status(500).send("Error generating sitemap");
    }
});

export default sitemapRouter;