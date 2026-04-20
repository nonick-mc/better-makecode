enum HasItemAmountFilter {
    //% block="と同じ数"
    Equal=0,
    //% block="以上"
    More=1
}

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
     * @param target プレイヤー
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
     * @param target プレイヤー
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

    /**
     * エンティティがアイテムを指定した数所持していた場合に真を返します。
     * @param target エンティティ
     * @param item アイテム
     * @param amount 数
     * @param
     */
    //% block="$targetが$item|を$amount個$filter所持している"
    //% target.shadow=minecraftTarget
    //% item.shadow=minecraftItem
    //% inlineInputMode=inline
    //% group="アイテム"
    export function hasAmountItem(
        target: TargetSelector,
        item: number,
        amount: number,
        filter: HasItemAmountFilter
    ): boolean {
        target.addRule(
            'hasItem',
            `{item:${blocks.nameOfBlock(item)},quantity=${amount}${filter ? '..' : ''}}`
        )
        return player.execute(`testfor ${target.toString()}`)
    }
}
