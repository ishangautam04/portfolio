# 🎨 Personal Portfolio WebsiteThis is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).



A modern, visually stunning personal portfolio built with Next.js, featuring smooth animations, dark mode, and a clean design.## Getting Started



## ✨ FeaturesFirst, run the development server:



- **Modern Tech Stack**: Next.js 14 with App Router, React, JavaScript, Tailwind CSS```bash

- **Stunning Animations**: Framer Motion for smooth transitions and effectsnpm run dev

- **Dark Mode**: Fully functional theme switcher with system preference detection# or

- **Responsive Design**: Mobile-first approach, looks great on all devicesyarn dev

- **Performance Optimized**: Fast loading, SEO-friendly, production-ready# or

- **Clean Architecture**: Well-organized components and data structurepnpm dev

- **Contact Form**: Built-in API route for form submissions (ready for email integration)# or

bun dev

## 🚀 Getting Started```



### 1. Customize Your InformationOpen [http://localhost:3000](http://localhost:3000) with your browser to see the result.



Edit the data files in the `data/` folder with your personal information:You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.



- **`data/about.js`**: Your name, bio, contact info, social linksThis project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

- **`data/skills.js`**: Your technical skills and proficiency levels

- **`data/projects.js`**: Your projects with descriptions, technologies, and links## Learn More

- **`data/experience.js`**: Your work experience, education, and certifications

To learn more about Next.js, take a look at the following resources:

### 2. Add Your Images

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.

Place your images in the `public/images/` folder:- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

- Profile photo: `public/images/profile.jpg`

- Project screenshots: `public/images/projects/`You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

- Resume PDF: `public/resume.pdf`

## Deploy on Vercel

### 3. Run the Development Server

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

```bash

npm run devCheck out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

```

Open [http://localhost:3000](http://localhost:3000) to see your portfolio!

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── api/contact/       # Contact form API endpoint
│   ├── layout.js          # Root layout with theme provider
│   ├── page.js            # Main page
│   └── globals.css        # Global styles and animations
├── components/            # Reusable React components
│   ├── Navbar.jsx         # Navigation with theme toggle
│   ├── Hero.jsx           # Hero section with animations
│   ├── About.jsx          # About section
│   ├── Skills.jsx         # Skills showcase
│   ├── Projects.jsx       # Projects portfolio
│   ├── Experience.jsx     # Work experience timeline
│   ├── Contact.jsx        # Contact form
│   ├── Footer.jsx         # Footer
│   └── ...                # Other reusable components
├── data/                  # Your content (easy to update!)
│   ├── about.js
│   ├── skills.js
│   ├── projects.js
│   └── experience.js
├── lib/
│   └── utils.js           # Utility functions
└── public/
    └── images/            # Your images
```

## 🎨 Sections Included

1. **Hero**: Eye-catching introduction with animated gradient background
2. **About**: Personal bio with quick stats and contact info
3. **Skills**: Technical skills with animated progress bars
4. **Projects**: Portfolio showcase with filtering and project cards
5. **Experience**: Career timeline with detailed work history
6. **Contact**: Functional contact form with validation

## 📧 Email Integration (Optional)

To enable email functionality for the contact form:

1. Install Resend (recommended):
```bash
npm install resend
```

2. Get your API key from [resend.com](https://resend.com)

3. Create a `.env.local` file:
```
RESEND_API_KEY=your_api_key_here
```

4. Uncomment the Resend code in `app/api/contact/route.js`

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import project on [vercel.com](https://vercel.com)
3. Deploy with one click!

Vercel is made by the creators of Next.js and provides:
- Zero-config deployment
- Automatic HTTPS
- Global CDN
- Free hosting

### Alternative Hosting

You can also deploy to:
- **Netlify**: Great alternative with similar features
- **Railway**: Good for full-stack apps
- **Any Node.js hosting**: Build with `npm run build`

## 🎯 Customization Tips

### Change Color Scheme

Edit `tailwind.config.js` to customize colors:
```javascript
colors: {
  primary: { /* your colors */ },
  accent: { /* your colors */ }
}
```

### Add More Sections

1. Create a new component in `components/`
2. Add your content data in `data/`
3. Import and use in `app/page.js`

### Modify Animations

Customize animations in:
- `tailwind.config.js` (keyframes and animations)
- Component files (Framer Motion props)
- `app/globals.css` (custom CSS animations)

## 📦 Technologies Used

- **Next.js 14**: React framework with App Router
- **React**: UI library
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **Lucide React**: Beautiful icons
- **next-themes**: Dark mode support

## 🐛 Troubleshooting

**Dark mode not working?**
- Make sure you're using the `ThemeProvider` in `layout.js`
- Check that Tailwind is configured with `darkMode: "class"`

**Images not loading?**
- Place images in the `public/` folder
- Use paths like `/images/your-image.jpg`
- Update the image paths in your data files

**Form not sending emails?**
- The basic setup logs to console
- Follow the Email Integration steps above to enable actual emails

## 📝 License

Feel free to use this template for your personal portfolio!

## 🤝 Contributing

This is a personal portfolio template. Feel free to fork and customize for your own use!

---

**Made with ❤️ using Next.js**

Need help? Check out:
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
