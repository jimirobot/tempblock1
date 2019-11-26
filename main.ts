
/**
 * 自訂的積木
 */
//% block="TEMP" weight=500 color=#660066 icon="\uf2c8"
namespace custom {
    //% block="Input the Weather Temperature %c_temp ℃"
    //% weight=100 color=#ff99ff
    export function TempChange(c_temp: number): number {
        return ((c_temp * 1.8) + 32)
    }

}
