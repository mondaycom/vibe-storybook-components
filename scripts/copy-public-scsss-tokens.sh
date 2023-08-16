#!/bin/bash

# Define the source and destination paths
source_folder="./src/styles"
destination_folder="./dist/styles"
# Copy the styles folder and its contents
cp -r "$source_folder" "$destination_folder"

source_index="./src/_tokens.scss"
destination_index="./dist/_tokens.scss"
# Copy the tokens index as partial
cp "$source_index" "$destination_index"

# Display success message
echo "Folder $source_folder successfully copied to $destination_folder."
