import React from "react";
import logo from '../../images/pngwing.com.png'
import jsPDF from "jspdf";

const MainPage = () => {

    const generatePdf = () => {
        const doc = new jsPDF();
        const imgData = logo;
        const text = 'Ivan Ivanov'
        const text2 = '03.11.2023'
        const text3 = 'I Ivanov'

        const canvas = document.createElement('canvas'); //<canvas></canvas>
        const ctx = canvas.getContext('2d')
        const img = new Image()

        img.onload = function () {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0)

            ctx.font = '120px Arial';
            ctx.fillStyle = 'white';
            const textWidth = ctx.measureText(text).width
            const x = (canvas.width - textWidth) / 2
            const y = canvas.height / 2
            ctx.fillText(text, x, y)

            ctx.font = '120px Arial';
            ctx.fillStyle = 'white';
            ctx.textAlign = 'start'
            const textWidth2 = ctx.measureText(text2).width
            const x2 = (canvas.width - textWidth) / 3.7
            const y2 = (canvas.height - textWidth2) / 1.08
            ctx.fillText(text2, x2, y2)

            ctx.font = '120px Arial';
            ctx.fillStyle = 'red';
            ctx.textAlign = 'start';
            const textWidth3 = ctx.measureText(text3).width
            const x3 = (canvas.width - textWidth) / 1.34
            const y3 = (canvas.height - textWidth3) / 1.12
            ctx.fillText(text3, x3, y3)

            const dataUrl = canvas.toDataURL('image/jpeg');
            doc.addImage(dataUrl, 'JPEG', 15, 40, 180, 160);
            const pdfOutput = doc.output('datauristring');
            const pdfWindow = window.open();
            pdfWindow.document.write("<iframe width='100%' height='100%' src='"+ pdfOutput + " '></iframe> ")
        }

        img.src = imgData
    }

    return (
        <button onClick={generatePdf}>открыть</button>

    )
}

export default MainPage;