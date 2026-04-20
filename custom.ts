//% weight=100 color=#2d76d4 icon="" block="プレイヤー +"
namespace betterPlayer {
    /**
     * コマンドの実行が成功した場合に真を返します。
     * @param command 実行するコマンド
     */
    //% block="コマンド$commandが成功した"
    export function isSuccessExecute(command: string): boolean {
        return player.execute(command)
    }
}

//% weight=100 color=#7b49c9 icon="" block="モブ +"
//% groups="['アイテム']""
namespace betterMob {
    /**
     * プレイヤーのインベントリから特定のアイテムを削除します。
     * @param target 削除するプレイヤー
     * @param item アイテム
     * @param amount 個数
     */
    //% block="$targetの持ち物から$itemを$amount個削除する"
    //% target.shadow=minecraftTarget
    //% item.shadow=minecraftItem
    //% group="アイテム"
    export function clearItem(
        target: TargetSelector,
        item: number,
        amount: number
    ): void {
        player.execute(`clear ${target.toString()} ${item.toString()} 0 ${amount}`)
    }

    /**
     * プレイヤーの持ち物から特定のアイテムを全て削除します。
     * @param target 削除するプレイヤー
     * @param item アイテム
     */
    //% block="$targetの持ち物から$itemを全て削除する"
    //% target.shadow=minecraftTarget
    //% item.shadow=minecraftItem
    //% group="アイテム"
    export function clearItem_All(
        target: TargetSelector,
        item: number
    ): void {
        player.execute(`clear ${target.toString()} ${item.toString()}`)
    }

    /**
     * プレイヤーの持ち物から全てのアイテムを削除します。
     * @param target 削除するプレイヤー
     */
    //% block="$targetの持ち物を全て削除する"
    //% target.shadow=minecraftTarget
    //% group="アイテム"
    export function clearAllItem(
        target: TargetSelector,
    ): void {
        player.execute(`clear ${target.toString()}`)
    }
}
