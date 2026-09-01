// RIOPAK ENGINEERS – Main entry
// navigation.js, animations.js and smooth-scroll.js are loaded separately.
(function () {
  // Current year in footer
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Section 08 — Industry Row Interactive Hover Card Switcher
  const industryRows = document.querySelectorAll(".industry-row");
  const indPreviewImg = document.getElementById("indPreviewImg");
  const indCardTitle = document.getElementById("indCardTitle");
  const indCardDesc = document.getElementById("indCardDesc");

  if (industryRows.length > 0 && indPreviewImg) {
    industryRows.forEach((row) => {
      row.addEventListener("mouseenter", function () {
        const newSrc = this.getAttribute("data-img");
        const newTitle = this.getAttribute("data-title");
        const newDesc = this.getAttribute("data-desc");

        if (newSrc) {
          indPreviewImg.style.opacity = "0.3";
          if (indCardTitle) indCardTitle.style.opacity = "0.3";
          if (indCardDesc) indCardDesc.style.opacity = "0.3";

          setTimeout(() => {
            indPreviewImg.src = newSrc;
            if (newTitle && indCardTitle) indCardTitle.textContent = newTitle;
            if (newDesc && indCardDesc) indCardDesc.textContent = newDesc;

            indPreviewImg.style.opacity = "1";
            if (indCardTitle) indCardTitle.style.opacity = "1";
            if (indCardDesc) indCardDesc.style.opacity = "1";
          }, 120);
        }
      });
    });
  }

  // Contact Page — Interactive Project Selector Chips
  const chipButtons = document.querySelectorAll(".chip-btn");
  if (chipButtons.length > 0) {
    chipButtons.forEach((chip) => {
      chip.addEventListener("click", function () {
        const parentWrap = this.closest(".chips-wrap");
        if (parentWrap) {
          parentWrap.querySelectorAll(".chip-btn").forEach((c) => c.classList.remove("active"));
        }
        this.classList.add("active");
      });
    });
  }

  // Industry Deep Dive Modal Popup Logic
  const industryData = {
    food: {
      sector: "SECTOR 01",
      title: "FOOD & BEVERAGE PACKAGING",
      desc: "High-precision dosing and packaging for powders, granules, liquids, sauces, edible oils and processed food items.",
      products: ["Spices & Seasonings", "Flour & Starch Powders", "Sugar, Salt & Pulses", "Tea & Coffee Granules", "Snacks & Confectionery", "Sauces, Ketchup & Edible Oils"],
      machines: [
        { name: "VFFS Auger Filler Line", spec: "For fine spices & milk/flour powders up to 100 pouches/min" },
        { name: "Multihead Combination Weigher", spec: "10/14/20 Head weighers for snacks, pulses & dry fruits" },
        { name: "Volumetric Cup Filler VFFS", spec: "Economical high-speed dosing for sugar, salt & grains" },
        { name: "Monoblock Bottle & Jar Liquid Line", spec: "Piston & gravity filling for sauces, syrups & edible oils" }
      ],
      highlights: ["SS304 / SS316 food-grade contact parts", "Nitrogen gas flushing for extended shelf life", "Dust collector hood integration for clean filling", "IP65 washdown compliant machine frame"]
    },
    agro: {
      sector: "SECTOR 02",
      title: "AGRO & CHEMICAL PACKAGING",
      desc: "Heavy-duty dust-controlled packaging systems engineered for agricultural seeds, fertilizers, pesticides, animal feed, and granular chemicals.",
      products: ["Agricultural Hybrid Seeds", "Granular & Powder Fertilizers", "Pesticides & Fungicides", "Cattle & Poultry Feed", "Industrial Chemical Powders"],
      machines: [
        { name: "Dust-Proof VFFS Bagging Line", spec: "Sealed enclosure for fine agro-powders & fertilizers" },
        { name: "Linear Electronic Weigher", spec: "High-capacity dosing for seeds, grains & feed pellets" },
        { name: "Heavy-Duty Sack & Pouch Sealer", spec: "Reinforced seal jaws for 1kg to 25kg bulk bags" }
      ],
      highlights: ["Corrosion-resistant powder coating & stainless steel", "Enclosed dust extraction manifolds", "Heavy-duty seal jaw pressure for thick laminate bags", "Explosion-proof electrical option for chemical powders"]
    },
    pharma: {
      sector: "SECTOR 03",
      title: "PHARMACEUTICALS & HEALTHCARE",
      desc: "cGMP compliant filling and dosing machinery built for oral liquids, diagnostic powders, granules, medical sachets, and syrups.",
      products: ["Oral Liquids & Cough Syrups", "Protein Powders & Nutraceuticals", "Granular Diagnostic Reagents", "Single-Serve Medical Sachets", "Tablet & Capsule Counting"],
      machines: [
        { name: "Servo Auger Powder Dosing Unit", spec: "Micro-dosing accuracy for pharmaceutical powders" },
        { name: "Monoblock Liquid Filling & Capping", spec: "Sterile bottle filling, plugging & capping under LAF" },
        { name: "Multi-Lane Sachet Machine", spec: "High-speed single-dose pouch packaging" }
      ],
      highlights: ["cGMP & US-FDA compliant SS316L liquid contact parts", "21 CFR Part 11 compliant PLC control systems", "No-bottle-no-fill & laser batch printing sensor logic", "Cleanroom compatible compact machine footprint"]
    },
    cosmetics: {
      sector: "SECTOR 04",
      title: "COSMETICS & PERSONAL CARE",
      desc: "Flexible liquid, lotion and cream filling lines for shampoos, hand washes, hair oils, skincare creams, and perfume containers.",
      products: ["Hair Shampoos & Conditioners", "Skin Care Creams & Lotions", "Liquid Hand Wash & Gels", "Hair Oils & Body Oils", "Single-Use Sachet Samples"],
      machines: [
        { name: "Rotary Piston Liquid Filler", spec: "Anti-drip diving nozzle line for viscous shampoos & creams" },
        { name: "Automatic Screw & Snap Capper", spec: "Versatile cap torque control for odd-shaped bottles" },
        { name: "Liquid Sachet Form Fill Sealer", spec: "High-speed single-use cosmetic sachet pouches" }
      ],
      highlights: ["Positive displacement piston pumps for zero drip", "Tool-less quick changeover for multiple container sizes", "Heated jacketed hoppers with agitator for thick pastes", "Delicate bottle handling with star-wheel indexing"]
    },
    detergents: {
      sector: "SECTOR 05",
      title: "DETERGENTS & HOUSEHOLD",
      desc: "High-speed pouch packaging and container filling systems for washing powders, liquid detergents, dishwash gels, and floor cleaners.",
      products: ["Detergent Powders & Washing Soda", "Liquid Detergent & Fabric Softeners", "Dishwash Gels & Concentrates", "Floor & Glass Cleaner Bottles", "Bulk Detergent Bags"],
      machines: [
        { name: "Volumetric Cup VFFS Machine", spec: "High-volume dosing for washing powders from 50g to 5kg" },
        { name: "Linear Piston Liquid Bottle Line", spec: "Corrosion-proof liquid filler for aggressive cleaners" },
        { name: "Continuous Band Sealing Line", spec: "Heavy-duty conveyorized sealing for pre-made bags" }
      ],
      highlights: ["Chemical resistant contact components & tubing", "High seal pressure jaws for powder-dusted seal areas", "Volumetric dosing for rapid continuous output", "Integrated batch coding & weight inspection"]
    },
    custom: {
      sector: "SPECIALIZED REQUIREMENT",
      title: "CUSTOM PACKAGING AUTOMATION",
      desc: "Engineered custom dosing, filling, weighing and sealing systems for non-standard products, unique bulk densities or specific factory layouts.",
      products: ["Specialized Industrial Powders", "Non-Standard Bulk Densities", "Cleanroom Medical Devices", "High-Viscosity Gels & Adhesives", "Custom Turnkey Packaging Lines"],
      machines: [
        { name: "Custom Turnkey Packaging System", spec: "Tailored from raw material intake to final cartoning" },
        { name: "Specialized Dosing & Filling Rig", spec: "Customized hoppers, nozzles, augers & seal jaws" }
      ],
      highlights: ["In-house CAD/CAM engineering & 3D layout design", "Custom hopper agitators & pneumatic flow aids", "Factory Acceptance Testing (FAT) with client product samples", "Dedicated commissioning engineer support at site"]
    }
  };

  const modalOverlay = document.getElementById("industryModal");
  const modalSectorBadge = document.getElementById("modalSectorBadge");
  const modalTitle = document.getElementById("modalTitle");
  const modalDesc = document.getElementById("modalDesc");
  const modalProductsList = document.getElementById("modalProductsList");
  const modalMachinesList = document.getElementById("modalMachinesList");
  const modalHighlightsList = document.getElementById("modalHighlightsList");
  const modalCloseBtn = document.getElementById("modalCloseBtn");
  const modalCloseFooterBtn = document.getElementById("modalCloseFooterBtn");

  function openIndustryModal(key) {
    const data = industryData[key];
    if (!data || !modalOverlay) return;

    if (modalSectorBadge) modalSectorBadge.textContent = data.sector;
    if (modalTitle) modalTitle.textContent = data.title;
    if (modalDesc) modalDesc.textContent = data.desc;

    if (modalProductsList) {
      modalProductsList.innerHTML = data.products.map((p) => `<li>${p}</li>`).join("");
    }
    if (modalMachinesList) {
      modalMachinesList.innerHTML = data.machines.map((m) => `
        <div class="modal-machine-card">
          <h5 class="modal-machine-name">${m.name}</h5>
          <p class="modal-machine-spec">${m.spec}</p>
        </div>
      `).join("");
    }
    if (modalHighlightsList) {
      modalHighlightsList.innerHTML = data.highlights.map((h) => `<li>${h}</li>`).join("");
    }

    modalOverlay.classList.add("active");
    modalOverlay.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeIndustryModal() {
    if (!modalOverlay) return;
    modalOverlay.classList.remove("active");
    modalOverlay.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  const industryTriggers = document.querySelectorAll("[data-open-industry]");
  if (industryTriggers.length > 0) {
    industryTriggers.forEach((trigger) => {
      trigger.addEventListener("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        const key = this.getAttribute("data-open-industry");
        if (key) {
          openIndustryModal(key);
        }
      });
    });
  }

  if (modalCloseBtn) modalCloseBtn.addEventListener("click", closeIndustryModal);
  if (modalCloseFooterBtn) modalCloseFooterBtn.addEventListener("click", closeIndustryModal);
  if (modalOverlay) {
    modalOverlay.addEventListener("click", function (e) {
      if (e.target === this) closeIndustryModal();
    });
  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && modalOverlay && modalOverlay.classList.contains("active")) {
      closeIndustryModal();
    }
  });
})();