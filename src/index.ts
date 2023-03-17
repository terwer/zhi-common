/**
 * @packageDocumentation
 * 公共组件
 */

import ThemeFromEnum from "~/src/enums/themeFromEnum"
import ZhiSdk from "zhi-sdk"
import Env from "zhi-env"

/**
 * 工具类统一入口
 *
 * @public
 * @author terwer
 * @since 1.0.0
 */
class ZhiUtil {
  private static zhiSdkObj: ZhiSdk

  /**
   * 获取 zhi-sdk 实例
   *
   * @param env - 可选，环境变量对象
   */
  public static zhiSdk(env?: Env) {
    if (!ZhiUtil.zhiSdkObj) {
      ZhiUtil.zhiSdkObj = new ZhiSdk(env)
      /**
       * 日志
       */
      const logger = ZhiUtil.zhiSdkObj.getLogger()
      /**
       * 公共类库
       */
      const common = ZhiUtil.zhiSdkObj.common
      logger.info(common.strUtil.f("ZhiSdk inited, components are available now, like logger, env and so on."))
    }
    return ZhiUtil.zhiSdkObj
  }
}

export default ZhiUtil
export { ThemeFromEnum }
