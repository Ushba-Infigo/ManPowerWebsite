import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    Bio: {
        type: String,
        required: true
    },
    Description: {
        type: String,
        required: true
    },
    Stars: {
        type: Number,
        required: true,
        min: 1,
        max: 5,
        default: 5
    },
    ImagePath: {
        type: String,
        required: false
    },
    IsActive: {
        type: Boolean,
        default: true
    },
    CreatedAt: {
        type: Date,
        default: Date.now
    },
    UpdatedAt: {
        type: Date,
        default: Date.now
    }
});

reviewSchema.pre('save', function (next) {
    this.UpdatedAt = Date.now();
    next();
});

export default mongoose.model('Review', reviewSchema);
