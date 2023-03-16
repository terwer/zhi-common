import { describe, it } from "vitest"
import ZhiUtil from "~/src/index"
import Env from "zhi-env"

describe("test common", () => {
  it("test zhiSdk", function () {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const env = new Env(import.meta.env)
    const zhiUtil = ZhiUtil.zhiSdk(env)
    const now = zhiUtil.common.dateUtil.nowDateZh()
    console.log("now=>", now)
  })
})
