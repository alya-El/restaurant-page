(()=>{"use strict";function e(e){const t=document.createElement("a");t.classList.add(e),t.href=`#${e}`;const n=document.createElement("h2");return n.textContent=e.charAt(0).toUpperCase()+e.slice(1),t.appendChild(a(e)),t.appendChild(n),t}function a(e){const a=document.createElement("img");return a.classList.add("logo"),a.src=`./dist/images/${e}-logo.svg`,a.alt=`${e} logo`,a}function t(e,a,t,n){const d=document.createElement("div");d.classList.add("menu-item");const i=document.createElement("img");i.classList.add("menu-item-image"),i.src=`./dist/images/menu-items/${e}/${a.replace(/%20/g," ")}.png`,i.alt=`${a.replace(/%20/g," ")} ${e}`;const s=document.createElement("div");s.classList.add("menu-item-text");const c=document.createElement("h3");c.classList.add("menu-item-heading");const l=document.createElement("span");l.classList.add("menu-item-name"),l.textContent=`${a}`;const o=document.createElement("span");o.classList.add("menu-item-price"),o.textContent=`${t}`,c.appendChild(l),c.appendChild(o);const p=document.createElement("p");return p.textContent=`${n}`,s.appendChild(c),s.appendChild(p),d.appendChild(i),d.appendChild(s),d}const n=document.createElement("div");window.addEventListener("resize",(function(){window.innerWidth>=1050?n.classList.remove("hide"):n.classList.add("hide")})),document.getElementById("content").appendChild(function(){const e=document.createElement("header");e.classList.add("top-nav");const a=document.createElement("h1");return a.textContent="Piazza",e.appendChild(a),e.appendChild(function(){const e=document.createElement("a");e.href="#",e.classList.add("toggle-button");const a=document.createElement("span");a.classList.add("bar");for(let t=0;t<3;t++)e.appendChild(a.cloneNode(!0));return e.addEventListener("click",(e=>{n.classList.contains("hide")?n.classList.remove("hide"):n.classList.add("hide")})),e}()),e.appendChild(function(){n.classList.add("nav-links");const e=document.createElement("a"),a=document.createElement("a"),t=document.createElement("a");return e.href="#",a.href="#menu-nav",t.href="#",a.classList.add("active"),e.textContent="About",a.textContent="Menu",t.textContent="Contact",n.appendChild(e),n.appendChild(a),n.appendChild(t),n}()),e}()),function(){const n=document.querySelector("#content");n.appendChild(function(){const a=document.createElement("div");return a.classList.add("menu-nav"),a.id="menu-nav",a.appendChild(e("pizza")),a.appendChild(e("pasta")),a.appendChild(e("salad")),a}()),n.appendChild(function(){const e=document.createElement("div");e.classList.add("menu");const n=document.createElement("h2");n.appendChild(a("pizza")),n.append("Pizza"),e.appendChild(n);const d=document.createElement("div");d.classList.add("menu-group"),d.id="pizza",d.appendChild(t("pizza","Burrata","$18/$28","Tomato Sauce, burrata, garlic, basil")),d.appendChild(t("pizza","Guancia","$19/$31","Tomato sauce, fresh mozzarella, guanciale, shaved onion, pecorino")),d.appendChild(t("pizza","La Rossa","$15/$24","Tomato sauce, garlic, basil (no cheese)")),d.appendChild(t("pizza","Margherita","$17/$26","Tomato sauce, fresh mozzarella, basil, sea salt, California extra virgin olive oil")),d.appendChild(t("pizza","Pepperoni","$19/$32","Tomato Sauce, burrata, garlic, basil")),d.appendChild(t("pizza","Panna","$18/$28","Tomato sauce, fresh mozzarella, grass-fed PA cow’s cream, arugula, parmigiano")),e.appendChild(d);const i=document.createElement("h2");i.appendChild(a("pasta")),i.append("Pasta"),e.appendChild(i);const s=document.createElement("div");s.classList.add("menu-group"),s.id="pasta",s.appendChild(t("pasta","Alla Tarantina","$32","Spaghetti alla chitarra, white wine, olive oil, cream")),s.appendChild(t("pasta","Caprese","$28","Angel hair pasta, fresh mozzarella, garlic, grape tomato, olive oil")),s.appendChild(t("pasta","Alla vodka","$23","Tomato sauce, penne, cream, red pepper flakes, butter")),e.appendChild(s);const c=document.createElement("h2");c.appendChild(a("salad")),c.append("Salad"),e.appendChild(c);const l=document.createElement("div");return l.classList.add("menu-group"),l.id="salad",l.appendChild(t("salad","Caprese","$23","Balsamic vinegar, fresh mozzarella, olive oil, fresh basil, tomatoes")),l.appendChild(t("salad","Ceaser","$19","Anchovy paste, romaine lettuce, Dijon, parmigiano reggiano")),e.appendChild(l),e}())}()})();