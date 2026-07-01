    document.addEventListener("DOMContentLoaded", () => {
        const fills = document.querySelectorAll(".fill");

        // When the skills section is visible, animate bars
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    fills.forEach(fill => {
                        const percent = fill.getAttribute("data-percent");
                        fill.style.width = percent + "%";
                    });
                }
            });
        }, { threshold: 0.5 });

        observer.observe(document.querySelector("#skills"));
    });

    document.addEventListener("DOMContentLoaded", () => {
        const fills = document.querySelectorAll(".fill");
        const percentages = document.querySelectorAll(".percentage");

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    fills.forEach((fill, index) => {
                        const percent = parseInt(fill.getAttribute("data-percent"));
                        const target = parseInt(percentages[index].getAttribute("data-target"));

                        if (!percentages[index].classList.contains("done")) {
                            percentages[index].classList.add("done");

                            fill.style.width = percent + "%";

                            // Animate Percenta Counter
                        
                            let count = 0;
                            const interval = setInterval(() => {
                                if (count < target) {
                                    count++;
                                    percentages[index].textContent = count + "%";
                                }else{
                                    clearInterval(interval);
                                }
                            }, 20);
                        }    
                });
            }
        });
    }, {threshold: 0.3});

    observer.observe(document.querySelector("#skills"));
    });

    
    const thankyou = new URLSearchParams(window.location.search);
    if (thankyou.get('success') === '1') {
        document.getElementById('thankyou-message').style.display='block'
    };

