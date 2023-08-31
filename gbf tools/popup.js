function setd() {
    document.getElementById('setdata').onclick = async () => {
        try {
            const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
            const res = await chrome.scripting.executeScript({
                target: { tabId: tab.id },
                function: () => [
                    document.querySelectorAll('div.lis-lineup.lis-gold.multiple')[0].querySelectorAll('div.prt-gacha-obtain.star-stone.legend')[0].querySelectorAll('div.prt-stone')[0].innerHTML,
                    (document.querySelectorAll('div.lis-lineup.lis-gold.multiple')[0].querySelectorAll('div.prt-gacha-obtain.ticket.legend').length) 
                    ? document.querySelectorAll('div.lis-lineup.lis-gold.multiple')[0].querySelectorAll('div.prt-gacha-obtain.ticket.legend')[0].querySelectorAll('div.txt-gacha-cost')[0].innerHTML 
                    : "0",
                    (document.querySelectorAll('div.lis-lineup.lis-silver')[0].querySelectorAll('div.prt-gacha-obtain.ticket:not(.summer).legend').length) 
                    ? document.querySelectorAll('div.lis-lineup.lis-silver')[0].querySelectorAll('div.prt-gacha-obtain.ticket:not(.summer).legend')[0].querySelectorAll('div.txt-gacha-cost')[0].innerHTML 
                    : "0"
                ],
            });
            console.log(res);
            var total = 0;
            var temp = parseInt(res[0].result[0])
            if (isNaN(temp)) {
                document.getElementById('xtal').innerHTML = 0;
            } else {
                const xrolls = temp / 300;
                document.getElementById('xtal').innerHTML = xrolls;
                total += xrolls;
            }

            temp = parseInt(res[0].result[1].replace(/^\D+/g, ''))
            console.log(res)
            if (isNaN(temp)) {
                document.getElementById('tens').innerHTML = 0;
            } else {
                const trolls = temp * 10;
                document.getElementById('tens').innerHTML = trolls;
                total += trolls;
            }

            temp = parseInt(res[0].result[2].replace(/^\D+/g, ''))
            console.log(res)
            if (isNaN(temp)) {
                document.getElementById('singles').innerHTML = 0;
            } else {
                document.getElementById('singles').innerHTML = temp;
                total += temp;
            }
            document.getElementById('total').innerHTML = total;
            document.getElementById('spark').innerHTML = total/300;
        } catch (e) {
            console.log(e);
        }
    };
}

window.onload = function () {
    setd();
}
