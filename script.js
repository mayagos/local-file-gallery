document.addEventListener('DOMContentLoaded', () => {
    const fileListContainer = document.querySelector('.file-list');

    fetch('Saved Pictures/') // Fetch the list of files from the directory
        .then(response => response.text())
        .then(data => {
            const filenames = data.split('\n').filter(filename => filename !== 'desktop.ini');
            filenames.forEach(filename => {
                const downloadButton = document.createElement('a');
                downloadButton.href = `Saved Pictures/${filename}`; // Use relative path
                downloadButton.download = filename;
                downloadButton.textContent = `Download ${filename}`;
                downloadButton.classList.add('download-button');
                fileListContainer.appendChild(downloadButton);
            });
        })
        .catch(error => console.error('Error fetching file list:', error));
});
