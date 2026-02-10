
document.addEventListener('DOMContentLoaded', () => {
    // Initialize Anniversary Hook
    const startDate = "2023-01-20T00:00:00";

    useTime(startDate, (data) => {
        const counterEl = document.getElementById("container-contador");
        if (counterEl) {
            counterEl.innerHTML = `
                <div class="counter-item">
                    <span class="counter-value">${data.años}</span>
                    <span class="counter-label">Años</span>
                </div>
                <div class="counter-item">
                    <span class="counter-value">${data.days % 365}</span>
                    <span class="counter-label">Días</span>
                </div>
                <div class="counter-item">
                    <span class="counter-value">${data.hours}</span>
                    <span class="counter-label">Horas</span>
                </div>
                <div class="counter-item">
                    <span class="counter-value">${data.minutes}</span>
                    <span class="counter-label">min</span>
                </div>
            `;
        }
    });

    // Initialize Sakura Animation
    if (typeof initSakura === 'function') {
        initSakura();
    }

    // Envelope Logic
    const envelopeWrapper = document.getElementById("envelope-wrapper");
    const contentWrapper = document.getElementById("content-wrapper");

    if (envelopeWrapper) {
        envelopeWrapper.addEventListener("click", () => {
            // Start opening sequence
            envelopeWrapper.classList.add("is-open");

            // Wait for flap to open before showing content
            setTimeout(() => {
                if (contentWrapper) {
                    contentWrapper.classList.add("is-visible");
                }
            }, 600);
        });
    }

    // Button Interaction Logic
    const noBtn = document.getElementById("no-btn");
    const yesBtn = document.getElementById("yes-btn");
    const retryBtn = document.getElementById("retry-btn");

    function handleAction(event) {
        const btn = event.currentTarget;
        if (btn.textContent.trim() === "Sí, acepto") {
            showSuccess();
        }
    }

    if (noBtn && yesBtn) {
        // Hover swap effect
        noBtn.addEventListener("mouseenter", () => {
            const noText = noBtn.textContent;
            const yesText = yesBtn.textContent;

            noBtn.textContent = yesText;
            yesBtn.textContent = noText;

            noBtn.classList.replace("no-button", "yes-button");
            yesBtn.classList.replace("yes-button", "no-button");
        });

        noBtn.addEventListener("mouseleave", () => {
            const noText = noBtn.textContent;
            const yesText = yesBtn.textContent;

            noBtn.textContent = yesText;
            yesBtn.textContent = noText;

            noBtn.classList.replace("yes-button", "no-button");
            yesBtn.classList.replace("no-button", "yes-button");
        });

        // Click handlers
        noBtn.addEventListener("click", handleAction);
        yesBtn.addEventListener("click", handleAction);
    }

    if (retryBtn) {
        retryBtn.addEventListener("click", () => location.reload());
    }

    function showSuccess() {
        const content = document.getElementById("content-wrapper");
        const successMsg = document.getElementById("success-message");
        const envelope = document.getElementById("envelope-wrapper");

        if (content && successMsg) {
            content.style.display = "none";
            if (envelope) envelope.style.display = "none";
            successMsg.style.display = "block";

            // Celebration petals
            if (typeof createPetal === 'function') {
                for (let i = 0; i < 30; i++) {
                    setTimeout(createPetal, i * 100);
                }
            }
        }
    }
});
