export function Footer() {
  return (
    <footer className="bg-sidebar border-t border-sidebar-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-serif font-bold text-sidebar-foreground mb-4">ARAIC</h3>
            <p className="text-sidebar-foreground/80 mb-4 leading-relaxed">
              Your trusted insurance partner for over 25 years. We're committed to protecting what matters most to you
              and your family.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-sidebar-foreground/60 hover:text-sidebar-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sidebar-foreground/60 hover:text-sidebar-primary transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-sidebar-foreground mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sidebar-foreground/80 hover:text-sidebar-primary transition-colors">
                  Life Insurance
                </a>
              </li>
              <li>
                <a href="#" className="text-sidebar-foreground/80 hover:text-sidebar-primary transition-colors">
                  Health Insurance
                </a>
              </li>
              <li>
                <a href="#" className="text-sidebar-foreground/80 hover:text-sidebar-primary transition-colors">
                  Auto Insurance
                </a>
              </li>
              <li>
                <a href="#" className="text-sidebar-foreground/80 hover:text-sidebar-primary transition-colors">
                  Business Insurance
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-sidebar-foreground mb-4">Contact</h4>
            <ul className="space-y-2 text-sidebar-foreground/80">
              <li>(555) 123-4567</li>
              <li>info@araic.com</li>
              <li>
                123 Insurance Way
                <br />
                Suite 100
                <br />
                City, State 12345
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-sidebar-border mt-8 pt-8 text-center">
          <p className="text-sidebar-foreground/60">© 2025 ARAIC Insurance. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
