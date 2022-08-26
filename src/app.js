const gallery = require("./gallery.json");

//
// Uncomment this to log all gallery data:
//
// console.log(gallery);
//

export function App() {

    const rows = [];

    let curRow = {
        items: [], 
    };
    rows.push(curRow);

    const targetRowHeight = 200;
    const galleryWidth = 600;
    let curRowWidth = 0;

    for (const item of gallery) {

        //
        // Uncomment this to print all gallery item widths:
        //
        // console.log(item.width); 

        const aspectRatio = item.width / item.height;
        const computedWidth = targetRowHeight * aspectRatio;

        if (curRowWidth > 0 
            && curRowWidth + computedWidth > galleryWidth) {

            // Start a new row!
            curRow = {
                items: [], 
            };
            rows.push(curRow);

            curRowWidth = 0;
        }

        curRow.items.push(item);
        curRowWidth += computedWidth;
    }

    //
    // Uncomment this to print the allocation of gallery items
    // to rows:
    //
    // console.log(rows);

    const rowHeights = [
        targetRowHeight + 20,
        targetRowHeight + 21,
        targetRowHeight + 75,
        targetRowHeight + 0,
        targetRowHeight + 140,
        targetRowHeight + 0,
        targetRowHeight + 117,
        targetRowHeight + 20,
        targetRowHeight + 12,
        targetRowHeight + 25,
        targetRowHeight + 200,
    ];

    return (
        <div
            style={{
                width: `${galleryWidth}px`,
                border: "solid green 1px",
            }}
            >
            {rows.map((row, rowIndex) => {
                return (
                    <div
                        key={rowIndex}
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            height: `${rowHeights[rowIndex] || targetRowHeight}px`,
                        }}
                        >
                        {row.items.map(item => {
                            return (
                                <img 
                                    key={item.urls.thumb}
                                    src={item.urls.thumb} 
                                    />
                            );
                        })}
                    </div>
                );
            })}

        </div>
    );
}