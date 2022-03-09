import React, { useState } from "react";
import { Button } from "react-bootstrap";

//🎃, 🦃, 🎅, ☸️, 🐲
//Halloween, Thanksgiving, Christmas, Vesak, Lunar New Year
//Alphabetical
//Christmas, Halloween, Lunar New Year, Thanksgiving, Vesak
//By Date
//Lunar New Year, Vesak, Halloween, Thanksgiving, Christmas

export function CycleHoliday(): JSX.Element {
    const [holidayState, setHoliday] = useState<string>("🎃");

    const alphabeticalRecord: Record<string, string> = {
        "🎃": "🦃",
        "🦃": "🎅",
        "🎅": "☸️",
        "☸️": "🐲",
        "🐲": "🎃"
    };

    const byDateRecord: Record<string, string> = {
        "🐲": "☸️",
        "☸️": "🎃",
        "🎃": "🦃",
        "🦃": "🎅",
        "🎅": "🐲"
    };

    return (
        <div>
            <p>Holiday: {holidayState}</p>
            <div>
                <Button
                    onClick={() =>
                        setHoliday(
                            (currentHoliday) =>
                                alphabeticalRecord[currentHoliday]
                        )
                    }
                >
                    Advance Alphabetically
                </Button>
            </div>
            <div>
                <Button
                    onClick={() =>
                        setHoliday(
                            (currentHoliday) => byDateRecord[currentHoliday]
                        )
                    }
                >
                    Advance by Year
                </Button>
            </div>
        </div>
    );
}
