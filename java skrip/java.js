        function calculateBMI() {
            const weight = parseFloat(document.getElementById('weight').value);
            const height = parseFloat(document.getElementById('height').value);
            const resultDiv = document.getElementById('result');

            if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
                resultDiv.innerHTML = "<span style='color: red;'>Iltimos, to'g'ri Vazn va Bo'y ma'lumotlarini kiriting!</span>";
                return;
            }

            // BMI formulasi: vazn / (bo'y * bo'y)
            const bmi = weight / (height * height);
            const roundedBMI = bmi.toFixed(2);
            let category = "";
            let color = "";

            if (bmi < 18.5) {
                category = "Vazn yetishmovchiligi (Juda ozg'in).Vitaminlarga boy mahsulotlar istemol qiling ";
                color = "orange";
            } else if (bmi >= 18.5 && bmi <= 24.9) {
                category = "Normal vazn.Sog`lom hayot kechirishda davom eting";
                color = "green";
            } else if (bmi >= 25 && bmi <= 29.9) {
                category = "Ortiqcha vazn (Pre-obesity).Har kuni jismoniy mashq bilan shug`ullaning";
                color = "#ffc107"; // Sariq
            } else if (bmi >= 30) {
                category = "Semizlik (Obesity).Meva va sabzavodlar istemol qiling.Yog`li mahsulotlardan cheklaning";
                color = "red";
            } else {
                category = "Aniqlanmadi";
                color = "black";
            }

            resultDiv.innerHTML = `
                <p>Sizning BMI'ingiz: <strong>${roundedBMI}</strong></p>
                <p>Status: <strong style="color: ${color};">${category}</strong></p>
            `;
        }