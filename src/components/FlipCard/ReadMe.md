...
<Fragment key={index}>
    <FlipCard containerClasses={``} width={150} height={150}>
        <FlipCardFront frontSideClasses={`relative w-full h-initial`}>
            <div className={`w-full flex flex-col justify-center content-center items-center`}
                style={{
                    opacity: `${item?.selected === false ? "10%" : "100%"}`,
                    backgroundColor: `${item?.selected === false ? "#A1A1A1" : "#EFF0F3"}`
                }}
            >
                <div className={`w-full h-inherit p-2 flex flex-col justify-center content-center items-center`} 
                >
                    <img 
                        style={{
                            width: `128px`,
                            height: `auto`,
                        }}
                        src={item?.logo} 
                        alt={`${item?.id}. ${item?.abbreviation}`}
                    ></img>
                </div>
                <div className={`absolute bottom-0 w-full flex flex-col justify-center content-center items-center`}>
                    <ProgressBar
                        value={item?.progress}
                        className={`-mb-8 ${window.screen.availWidth <= 320 ? "w-12" : "w-full"} flex flex-row justify-start content-start items-start`}
                    ></ProgressBar>
                </div>
            </div>
        </FlipCardFront>
        <FlipCardBack>
            <div className={`w-full flex flex-col justify-center content-center items-center`}
                style={{
                    opacity: `${item?.selected === false ? "20%" : "100%"}`,
                    backgroundColor: `${item?.selected === false ? "#A1A1A1" : "#4FC546"}`
                }}
            >
                <MultiLineText
                    className={`height-inherit px-2 text-sm`} 
                    value={item?.description}
                >
                </MultiLineText>
            </div>
        </FlipCardBack>
    </FlipCard>
</Fragment>
...