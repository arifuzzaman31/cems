#!/bin/bash

# Navigate to the frontend directory
echo "Starting backend..."
cd ./backend || exit
npm install
npm run dev &

# Navigate to the backend directory
echo "Starting frontend..."
cd ./frontend || exit
npm install
npm run dev &

# Wait for all background processes to finish
wait
