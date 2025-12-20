import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import compression from "compression";

const app = express();
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    standardHeaders: true,
    legacyHeaders: false,
    message: "Too many requests from this IP, please try again later.",
});


app.set("trust proxy", 1);
app.use(limiter);

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))
app.use(helmet());
app.use(compression());
app.disable("x-powered-by");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api/health', (req, res) => {
    res.status(200).send("Hello")
})

app.get('/api/debug', (req, res) => {
    res.json({
        ip: req.ip,
        secure: req.secure,
        protocol: req.protocol,
        forwarded: req.headers['x-forwarded-for']
    });
});

export { app }