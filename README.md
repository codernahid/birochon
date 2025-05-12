# Personal Website

This repository contains the source code for a personal website featuring information about activities, publications, and contact details.

## Project Structure

```
.
├── index.html          # Home page
├── about.html         # About page
├── activities.html    # Activities/Projects page
├── publications.html  # Publications page
├── contact.html      # Contact information page
├── css/
│   └── style.css     # Main stylesheet
├── js/
│   └── script.js     # JavaScript functionality
└── images/           # Image assets
    ├── background.jpg
    ├── logo.jpg
    └── photo1.jpg
```

## Getting Started

### Prerequisites

- A modern web browser
- [Git](https://git-scm.com/) for version control

### Clone the Repository

To get a local copy of this website, run the following command in your terminal:

```bash
git clone https://github.com/YOUR-USERNAME/REPOSITORY-NAME.git
cd REPOSITORY-NAME
```

### Local Development

Since this is a static website, you can preview it locally in several ways:

1. **Simple Method**: Double-click the `index.html` file to open it in your default web browser.

2. **Using Python's built-in server** (Python 3.x):
   ```bash
   python -m http.server 8000
   ```
   Then open `http://localhost:8000` in your web browser.

3. **Using Node.js** (requires Node.js installation):
   First, install a simple HTTP server:
   ```bash
   npm install -g http-server
   ```
   Then run:
   ```bash
   http-server
   ```
   Access the site at `http://localhost:8080`

## Contributing

1. Fork the repository
2. Create your feature branch:
   ```bash
   git checkout -b feature/YourFeature
   ```
3. Make your changes
4. Commit your changes:
   ```bash
   git commit -m 'Add some feature'
   ```
5. Push to the branch:
   ```bash
   git push origin feature/YourFeature
   ```
6. Create a Pull Request

### Coding Standards

- Use meaningful class and ID names in HTML
- Follow proper HTML5 semantic structure
- Keep CSS organized and well-commented
- Format your code consistently
- Test across different browsers before submitting changes

## File Structure Guidelines

When adding new files:
- Place all stylesheets in the `css/` directory
- Place all JavaScript files in the `js/` directory
- Place all images in the `images/` directory
- Create new HTML files in the root directory

## License

[Add your chosen license here]

## Contact

[Add your contact information here]

---

Feel free to star ⭐ this repository if you find it helpful!
