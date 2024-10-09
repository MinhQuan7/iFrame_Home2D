    // <script src="https://www.unpkg.com/@eohjsc/era-widget@1.1.3/src/index.js"></script>
    //  function updateValues() {
    //         const eraWidget = new EraWidget();
    //         // Khai báo các ID cho humid, temp, và power
    //         const tempId = "Temp"; // ID chuỗi cho nhiệt độ
    //         const humidId = "Humid"; // ID chuỗi cho độ ẩm
    //         const pwId = "Power"; // ID số cho công suất tiêu thụ

    //         let configTemp = null,
    //             configHumid = null,
    //             configPower = null;

    //         eraWidget.init({
    //             onConfiguration: (configuration) => {
    //                 // Lưu các cấu hình khi nhận được từ widget
    //                 configTemp = configuration.realtime_configs[0]; // Lưu cấu hình nhiệt độ
    //                 configHumid = configuration.realtime_configs[1]; // Lưu cấu hình độ ẩm
    //                 configPower = configuration.realtime_configs[2]; // Lưu cấu hình power
    //             },

    //             // Hàm lấy giá trị từ các ID và cập nhật giao diện
    //             onValues: (values) => {
    //                 if (configHumid && values[configHumid.id]) {
    //                     const humidVal = values[configHumid.id].value;
    //                     document.getElementById("humidity").textContent = humidVal; // Cập nhật giá trị độ ẩm
    //                 }

    //                 if (configTemp && values[configTemp.id]) {
    //                     const tempVal = values[configTemp.id].value;
    //                     document.getElementById("temperature").textContent = tempVal; // Cập nhật giá trị nhiệt độ
    //                 }

    //                 if (configPower && values[configPower.id]) {
    //                     const powerVal = values[configPower.id].value;
    //                     document.getElementById("power").textContent = powerVal; // Cập nhật giá trị công suất tiêu thụ
    //                 } else {
    //                     console.error("Không tìm thấy cấu hình hoặc giá trị cho Power.");
    //                 }
    //             },
    //         });
    //     }