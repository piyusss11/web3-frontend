# Title Maker

A web application built with Vite that allows users to create titles associated with their MetaMask wallet address. Users can register, log in, and add titles only when their wallet is connected.

# Project Setup

Clone the repository:

        git clone https://github.com/piyusss11/web3-frontend.git

Install dependencies:

        npm i

# Environment Configuration

1.  Create an .env file by copying from .env.example:

         cp .env.example .env

2.  Configure the backend URL in the .env file:
    Replace VITE_LocalHost with the actual backend URL.
    Update the port number if needed, based on where your backend is hosted.

            VITE_LocalHost=http://localhost:5000

# Usage Instructions

1.  Run the development server:

            npm run dev

2.  Register or Log in:

    Create a new account or use the following credentials to log in:

    - Email: piyush@gmail.com
    - Password: Piyush@123

3.  Connect Your MetaMask Wallet:

    To add a title, connect your MetaMask wallet. The wallet address will be displayed on the dashboard upon successful connection.

4.  Add Titles:

    Once connected, you can add titles linked to your wallet address.
    Note: Titles can only be added when the wallet is connected.

# Technologies Used

- Frontend: React, TypeScript, Tailwind CSS, ShadCN
- State Management: Redux Toolkit (integrated but not used)
- Blockchain Integration: MetaMask (Ethers.js)

# Requirements completed

1. User Authentication: ✔️
2. Title Management: ✔️
3. MetaMask Integration:✔️
4. Testing: ❌
5. Documentation:✔️

demo video - https://www.loom.com/share/dbe1450ce9e948888341e3f3a8df2914?sid=dde98b74-105e-4c25-8054-6c3e2d97f5c5
