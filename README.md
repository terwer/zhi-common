# zhi-common

the library base for zhi related projects

![version](https://img.shields.io/github/release/terwer/zhi-common.svg?style=flat-square)
![license](https://img.shields.io/badge/license-GPL-blue.svg?style=popout-square)

## Usage

```ts
import ZhiUtil from "zhi-common"
import Env from "zhi-env"

const env = new Env(import.meta.env)
const zhiUtil = ZhiUtil.zhiSdk(env)
const now = zhiUtil.common.dateUtil.nowDateZh()
console.log("now=>", now)
```

## Deps

```
├── zhi-sdk
```

## Useful scripts

### Build

```bash
pnpm ci
```

### Publish to npm

```bash
pnpm package
```

### Docs

```bash
pnpm vitepress:dev
```
