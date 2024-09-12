const mongoose=require("mongoose")
const dbConnect=async()=>{
console.log(process.env);

    try {
        await mongoose.connect('mongodb+srv://YASH:YASH1412@fullstack-blog.juyk9.mongodb.net/FULLSTACK-BLOG?retryWrites=true&w=majority&appName=FULLSTACK-BLOG');
        console.log('DB connected successfully');
        
    } catch (error) {
        console.log('DB Connection failed', error.message);
    }
}
dbConnect();
