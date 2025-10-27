# AnyTool - Free Online Tools

A comprehensive collection of free online tools for developers, designers, and content creators.

## Features

- 🎨 **AI Tools**: Image generation, video creation, background removal
- 🔧 **Developer Tools**: Code compiler, JSON editor, regex tester
- 📄 **PDF Tools**: PDF converter, PDF to Word, PDF to Image
- 🖼️ **Image Tools**: Image beautifier, watermark tools, drawing board
- 🔐 **Security Tools**: Code obfuscation, encryption tools
- 📱 **Utility Tools**: QR code generator, URL shortener, barcode generator

## Tech Stack

- **Framework**: Next.js 14
- **UI Components**: shadcn/ui
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Theme**: next-themes

## Getting Started

### Installation

```bash
# Install dependencies
bun install

# Run development server
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Build for Production

```bash
bun run build
bun run start
```

## Project Structure

```
anytool/
├── app/                    # Next.js app directory
│   ├── tools/             # Individual tool pages
│   ├── page.tsx           # Home page
│   └── layout.tsx         # Root layout
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── header.tsx        # Header component
│   ├── sidebar.tsx       # Sidebar navigation
│   └── tool-card.tsx     # Tool card component
└── public/               # Static assets
```

## Available Tools

### AI Tools
- AI Image To Video
- AI Video Generator
- AI Image Generator
- Background Remover
- Image Beautifier
- And many more...

### Developer Tools
- Online Code Compiler
- JSON Editor
- Regex Tester
- JS Code Obfuscator
- Python Obfuscator

### Converter Tools
- PDF to Word
- PDF to Image
- Base64 to PDF
- Audio to Base64

## License

MIT License

## Author

Created with ❤️ by Bhanwar Lal
