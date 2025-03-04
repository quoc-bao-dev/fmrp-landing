import { ICardContactItem } from "@/types/card/ICard";
import React from "react";

// export type ContactItemType = {
//     icon: React.ReactNode;
//     title: string;
//     description?: string;
//     content: string | { label: string; value: string }[];
//     type?: "phone" | "email" | "working_hours" | string;
// };

interface ContactCardProps {
    item: ICardContactItem;
}

const ContactCard: React.FC<ContactCardProps> = ({ item }) => {
    return (
        <div
            className="p-5 bg-white rounded-3xl flex gap-3"
            style={{
                boxShadow: "0px 1px 2px 0px #1212170F, 0px 1px 3px 0px #1212171A",
            }}
        >
            <div className="size-6 shrink-0">{item.icon}</div>
            <div className="space-y-3">
                <h3 className="text-sm-default font-extrabold text-[#33404A]">
                    {item.title}
                </h3>

                <div className="space-y-0.5">
                    {item.description && (
                        <p className="text-sm text-[#33404A] font-medium">
                            {item.description}
                        </p>
                    )}

                    {Array.isArray(item.content) ? (
                        <div
                            className={`${item.type === "working_hours"
                                ? "space-y-0.5"
                                : "space-y-3"
                                } text-sm`}
                        >
                            {item.content.map((subItem, subIndex) => (
                                <p key={subIndex}>
                                    <span className="font-bold text-[#33404A]">
                                        {subItem.label}
                                    </span>{" "}
                                    {subItem.value}
                                </p>
                            ))}
                        </div>
                    ) : (
                        <>
                            {!["phone", "email"].includes(item.type ?? "") ? (
                                <p className="text-[#33404A] font-medium">{item.content}</p>
                            ) : (
                                <>
                                    {item.type === "phone" && (
                                        <a
                                            href={`tel:${item.content}`}
                                            className="text-[#33404A] hover:text-[#33404A]/80 font-medium hover:underline hover:underline-offset-2 custom-transition"
                                        >
                                            {item.content}
                                        </a>
                                    )}
                                    {item.type === "email" && (
                                        <a
                                            href={`mailto:${item.content}`}
                                            className="text-[#33404A] hover:text-[#33404A]/80 font-medium hover:underline hover:underline-offset-2 custom-transition"
                                        >
                                            {item.content}
                                        </a>
                                    )}
                                </>
                            )}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ContactCard;
