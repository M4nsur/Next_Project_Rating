import { iParag } from './Paragraph.props';
import styles from "./Paragraph.module.css";
import cn from "classnames";
import React, { useEffect, useState } from 'react';

const Paragraph = ({size = "14", children}: iParag): JSX.Element => {

    return (
        <p className={cn(styles.paragraph, {
            [styles.pSize14]: size == "14",
            [styles.pSize16]: size == "16",
            [styles.pSize18]: size == "18",
        })}>
            {children}
        </p>
    );
};

export default Paragraph;