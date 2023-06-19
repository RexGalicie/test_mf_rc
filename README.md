# TestMfRc

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Here are the things you will need to have installed before running this project:

- Node.js
- Nx CLI
- Your other dependencies go here

### Installation

Clone the repository:

```bash
git clone git@github.com:RexGalicie/test_mf_rc.git
cd your-repository
```

Install dependencies:

```bash
pnpm install
```

### Running the Application
You can run the application using the following command:

```bash
npx nx run-many --targets=serve 
```

After the project has started, you can run the following curl command to interact with it:
```bash 
curl --location 'http://localhost:5200/api/test/call'
```

### Result
At the console or even from curl response, you will see a 500 error with the following message:

```
- error Error [TypeError]: Cannot read properties of undefined (reading 'then')
```


### Stable version

If you set the `@module-federation/nextjs-mf` plugin to version `6.5.1` and restart the application, all should work as expected. You can do this by modifying the `package.json` file:

```
"@module-federation/nextjs-mf": "6.5.1"
```

Then, run the application again: 
```bash
npx nx run-many --targets=serve 
```

After the project has started, you can run the following curl command to interact with it:
```bash 
curl --location 'http://localhost:5200/api/test/call'
```

### Expected result
Api return expected result without any errors

