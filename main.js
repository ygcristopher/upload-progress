const dropArea = document.querySelector('.drag-files')

dropArea.addEventListener('dragover', () => {
    dropArea.classList.add('dragover')
})

dropArea.addEventListener('dragleave', () => {
    dropArea.classList.remove('dragover')
})

console.log('Hello World')