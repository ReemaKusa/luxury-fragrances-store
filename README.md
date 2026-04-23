#  FLEUR – Perfume Store (Angular Project)

##  Overview
FLEUR is a single-page e-commerce web application built using Angular.  
The project represents a luxury perfume store where users can browse products, view details, add items to cart, and complete checkout.

---

##  Features
- View list of perfumes
- View perfume details
- Add to cart
- Update quantity
- Remove items from cart
- Calculate total price
- Checkout form with validation
- Order confirmation page

---

##  Technologies
- Angular
- TypeScript
- HTML / CSS
- Angular Router
- Angular Forms

---

##  Structure
- components → UI pages (products, cart, details...)
- services → business logic (cart, data)
- models → data structure
- assets/data.json → perfumes data

---

##  Logic
- Data is loaded from `data.json`
- Cart is handled using a shared service
- Components communicate using @Input and @Output
- Routing is used for page navigation

---

##  Run Project

```bash
npm install
ng serve

Then open `http://localhost:4200`.
```
## Author: Reema Kusa