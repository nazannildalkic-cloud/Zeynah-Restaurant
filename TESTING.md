# 🧪 ZEYNAH Website - Testing & QA Guide

## ✅ Pre-Launch Checklist

### Performance Testing
- [ ] Lighthouse Score > 90 (Desktop)
- [ ] Lighthouse Score > 85 (Mobile)
- [ ] Page Load Time < 2 seconds
- [ ] Largest Contentful Paint (LCP) < 2.5s
- [ ] Cumulative Layout Shift (CLS) < 0.1
- [ ] First Input Delay (FID) < 100ms

### SEO Testing
- [ ] Meta Title + Description present
- [ ] Open Graph Tags correct
- [ ] Sitemap.xml accessible
- [ ] robots.txt configured
- [ ] Mobile-Friendly Test passing
- [ ] Structured Data valid

### Browser Compatibility
- [ ] Chrome/Brave (Latest)
- [ ] Firefox (Latest)
- [ ] Safari (Latest)
- [ ] Edge (Latest)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

### Accessibility Testing
- [ ] WAVE analysis (no errors)
- [ ] axe DevTools (no violations)
- [ ] Keyboard Navigation works
- [ ] Screen Reader compatible (tested with NVDA/JAWS)
- [ ] Color Contrast WCAG AA
- [ ] Focus Indicators visible

### Mobile Testing
- [ ] Responsive at 320px
- [ ] Responsive at 480px
- [ ] Responsive at 768px
- [ ] Touch targets ≥ 44x44px
- [ ] Mobile menu functional
- [ ] No horizontal scrolling

### Content Testing
- [ ] All links working
- [ ] No broken images
- [ ] No placeholder text
- [ ] Copy edited & proofread
- [ ] CTAs functional
- [ ] Contact info correct

## 🔍 Testing Tools & Commands

### Local Testing
```bash
# Start local server
python -m http.server 8000
# Or: npm run dev

# Visit in browser
http://localhost:8000
```

### Google Tools
- **Lighthouse:** Chrome DevTools → Lighthouse
- **Mobile-Friendly:** https://search.google.com/test/mobile-friendly
- **PageSpeed Insights:** https://pagespeed.web.dev
- **Rich Results:** https://search.google.com/test/rich-results

### Firefox Developer Tools
```
F12 → Accessibility → Check for Issues
F12 → Performance → Record & Analyze
```

### Accessibility Testing
```bash
# WAVE Browser Extension
# axe DevTools Browser Extension
# aXe Command Line: npm install -g @axe-core/cli

# NVDA Screen Reader (Windows)
# JAWS Screen Reader (Windows)
# VoiceOver (macOS/iOS)
```

### Performance Metrics

#### Ideal Targets
```
First Contentful Paint (FCP):     < 1.8s
Largest Contentful Paint (LCP):   < 2.5s
First Input Delay (FID):          < 100ms
Cumulative Layout Shift (CLS):    < 0.1
Time to Interactive (TTI):        < 3.8s
Total Blocking Time (TBT):        < 300ms
```

#### Testing Commands
```bash
# Using Lighthouse CLI
npm install -g lighthouse
lighthouse https://zeynah.com --view

# Using WebPageTest
# https://www.webpagetest.org
```

## 📋 Manual Testing Checklist

### Browser Testing
- [ ] Header fixed on scroll
- [ ] Navigation links smooth-scroll
- [ ] Mobile menu toggles
- [ ] Gradient text displays correctly
- [ ] Logo responsive sizing
- [ ] Animations smooth (no jank)

### Form Testing (if added)
- [ ] Required fields validated
- [ ] Email format validated
- [ ] Phone format validated
- [ ] Success message displays
- [ ] Error messages show
- [ ] Submit button disabled during submission

### Device Testing
- [ ] iPhone 12/13/14 (Safari)
- [ ] Android Phone (Chrome)
- [ ] iPad (Safari)
- [ ] Android Tablet (Chrome)
- [ ] Desktop (1920x1080)
- [ ] Desktop (1366x768)
- [ ] Desktop (1024x768)

### Network Testing
- [ ] Fast 3G (DevTools)
- [ ] Slow 4G (DevTools)
- [ ] Offline mode handling

### Visual Testing
- [ ] Colors accurate
- [ ] Fonts load correctly
- [ ] Icons display properly
- [ ] Spacing consistent
- [ ] Alignment perfect
- [ ] No visual bugs

### Functional Testing
- [ ] All links clickable
- [ ] No 404 errors
- [ ] Analytics firing (if configured)
- [ ] Email links work
- [ ] Phone links work
- [ ] Scroll performance smooth

## 🐛 Bug Reporting Template

```
**Environment:**
- Browser: [Chrome, Firefox, Safari, Edge]
- OS: [Windows, macOS, Linux, iOS, Android]
- Device: [Desktop, Tablet, Mobile]

**Description:**
Clear description of the issue

**Steps to Reproduce:**
1. Navigate to [section]
2. [Action]
3. [Expected vs Actual result]

**Screenshots/Video:**
[Attach if possible]

**Console Errors:**
[Paste errors from DevTools]
```

## 📊 Performance Budget

### Recommended File Sizes
- **HTML:** < 50KB
- **CSS:** < 30KB (currently ~25KB)
- **JavaScript:** < 25KB (currently ~8KB)
- **Total HTML:** < 100KB

### Optimization Opportunities
- [ ] Minify CSS/JS for production
- [ ] Consider WebP images (when added)
- [ ] Lazy load if adding images
- [ ] Consider Code Splitting (if using frameworks)

## 🔐 Security Checklist

### Content Security
- [ ] No inline event handlers (only JS file)
- [ ] No eval() or new Function()
- [ ] Secure external links (https)
- [ ] No sensitive data in source
- [ ] No exposed API keys

### HTTP Headers
- [ ] X-Content-Type-Options: nosniff
- [ ] X-Frame-Options: SAMEORIGIN
- [ ] X-XSS-Protection: 1; mode=block
- [ ] Content-Security-Policy set
- [ ] Referrer-Policy: strict-origin-when-cross-origin

### SSL/TLS
- [ ] HTTPS enabled
- [ ] SSL certificate valid
- [ ] HSTS header present
- [ ] No mixed content (http/https)

## 📈 Analytics Testing

### Event Tracking (if configured)
- [ ] CTA clicks tracked
- [ ] Link clicks tracked
- [ ] Form submissions tracked
- [ ] Page views recorded
- [ ] User journey tracked

### Data Validation
- [ ] No NaN/undefined values
- [ ] Timestamps correct
- [ ] User IDs anonymized
- [ ] No PII collected without consent

## 🚀 Deployment Testing

### Pre-Deployment
```bash
# Check file structure
ls -la

# Validate HTML
# Use: https://validator.w3.org

# Validate CSS
# Use: https://jigsaw.w3.org/css-validator

# Check links
# Use: https://www.dead-link-checker.com
```

### Post-Deployment
- [ ] All files uploaded
- [ ] index.html accessible
- [ ] CSS/JS loading
- [ ] Images displaying
- [ ] Links working
- [ ] Sitemap accessible
- [ ] robots.txt accessible
- [ ] DNS resolving

## 📝 Testing Documentation

After each major update:
1. Run Lighthouse audit
2. Run axe accessibility scan
3. Test on 3+ browsers
4. Test on mobile device
5. Document any findings
6. Update version number

---

**Last Updated:** February 2026  
**Tested By:** ZEYNAH Team  
**Status:** ✅ Production Ready
