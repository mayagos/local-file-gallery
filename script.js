document.addEventListener('DOMContentLoaded', () => {
    const fileListContainer = document.querySelector('.file-list');

    fetch('file-list.php')
        .then(response => response.json())
        .then(data => {
            data.forEach(file => {
                const downloadButton = document.createElement('a');
                downloadButton.href = file.path;
                downloadButton.download = file.name;
                downloadButton.textContent = `Download ${file.name}`;
                downloadButton.classList.add('download-button');
                fileListContainer.appendChild(downloadButton);
            });
        })
        .catch(error => console.error('Error fetching file list:', error));
});