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

    
    window.addEventListener('DOMContentLoaded' , () => {
        const thankyou = new URLSearchParams(window.location.search);
        if (thankyou.get('success') === '1') {
            document.getElementById('thankyou-message').style.display='block'
            document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
        }
    });
    
    //Loading Prompt
    window.addEventListener('load', function() {
        const overlay = document.querySelector('.loading-overlay');
        setTimeout(() => {
            overlay.classList.add('hidden');
            setTimeout(() => {
                overlay.style.display = 'none';
            }, 1000);
        }, 3000);
    });

    //mobile menu toggle
    const menutoggle = document.querySelector(".menu-toggle");
    const navlinks = document.querySelector(".nav-links");
    const menuoverlay = document.querySelector(".menu-overlay");

    menutoggle.addEventListener("click", () => {
        navlinks.classList.toggle("active");
        menuoverlay.classList.toggle("active");
    });

    menuoverlay.addEventListener("click", () => {
        navlinks.classList.remove("active");
        menuoverlay.classList.remove("active");
    });

    navlinks.querySelectorAll("a", ".logo").forEach(link => {
        link.addEventListener("click", () => {
        navlinks.classList.remove("active");
            menuoverlay.classList.remove("active");
            menutoggle.classList.remove("active");
        });
    });