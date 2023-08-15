document.addEventListener('DOMContentLoaded', () => {
    const fileListContainer = document.querySelector('.file-list');

    // Manually create an array of filenames
    const imageFilenames = [
        'cat.jpg', 
        'copy_cat.jpg', 
        'IMG_20220617_115827_resized_20230814_025220159.jpg', 
        'IMG_20220617_122035_resized_20230814_025219160.jpg', 
        'IMG_20220617_125628_resized_20230814_025219878.jpg', 
        'IMG_20220617_125811_resized_20230814_025220445.jpg', 
        'IMG_20220617_130526_resized_20230814_025218862.jpg', 
        'IMG_20220720_122717_resized_20230814_025219470.jpg', 
        'IMG_20220720_122757_resized_20230814_025218561.jpg', 
        'IMG_20220720_122810_resized_20230814_025218241.jpg'
    ];

    imageFilenames.forEach(filename => {
        const downloadButton = document.createElement('a');
        downloadButton.href = `Saved/${filename}`; // Use relative path
        downloadButton.download = filename;
        downloadButton.textContent = `Download ${filename}`;
        downloadButton.classList.add('download-button');
        fileListContainer.appendChild(downloadButton);
    });
});
