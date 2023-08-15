<?php
$directory = 'Saved Pictures';

$fileList = [];

if (is_dir($directory)) {
    $files = scandir($directory);
    foreach ($files as $file) {
        if ($file !== '.' && $file !== '..' && $file !== 'desktop.ini') {
            $fileInfo = [
                'name' => $file,
                'path' => $directory . '/' . $file
            ];
            $fileList[] = $fileInfo;
        }
    }
}

header('Content-Type: application/json');
echo json_encode($fileList);
?>