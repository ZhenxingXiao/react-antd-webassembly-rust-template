# Getting Started with React-Antd-Webassembly-Rust-Template

This project is a template for creating a project with react and antd components ( you also can remove antd by execute 
``` shell
npm uninstall antd
```
or
```shell
yarn remove antd
```
), and also include the .wasm runtime files witch created and  build from Rust.

## Available Scripts

In this project, I use craco instead create-react-script, because the antd prefer it and it can help coder override the configure of project by creating craco.config.js.

Before building wasm files, please make sure that you have install rustup, cargo and wasm-pack enviroment.

### `cargo genetate`
You can use this command to generate a wasm project quickly, like

```
cargo generate --git https://github.com/rustwasm/wasm-pack-template.git --name my-project
cd my-project
```
please read [wasm-pack-template](https://github.com/rustwasm/wasm-pack-template) for more detail info.

### `wasm build`

Go into the rust source folder, and excute this command for building wasm files.

Also, don't forget to config the WasmPackPlugin in craco.config.js before you want import that in the .js or .ts scripts.

### `yarn start`, `yarn test` and `yarn build`
As an usually project, we still use these commands for developing, testing and building the project.