$(document).ready(function () {
    function getDisk(index) {
        return `<li class="disk disk-${index}"></li>`;
    }

    const towerState = {
        1: [4, 5, 6, 7],
        2: [1],
        3: [2],
        4: [3]
    };

    for (let towerIndex in towerState) {
        if (towerState.hasOwnProperty(towerIndex)) {
            const $tower = $(`#tower-${towerIndex}`);

            const disks = towerState[towerIndex];

            for (let diskIndex = 0; diskIndex < disks.length; ++diskIndex) {
                const disk = disks[diskIndex];

                $tower.prepend(getDisk(disk));
            }
        }
    }
});