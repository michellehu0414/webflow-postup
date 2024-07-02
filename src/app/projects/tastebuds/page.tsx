/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { useState } from "react";
import { AppProps } from "next/app";
import styles from "./tastebuds.module.scss";
import "@/styles/globals.scss";
import Accordion from "@/components/ProjectAccordion/ProjectAccordion";
import ProjectProcess from "./03_ProjectProcess/ProjectProcess";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

const TasteBudsPage: React.FC = () => {
	const [open, setOpen] = useState(false);
	return (
		<main style={{ "--primary-color": "#4379df" } as React.CSSProperties}>
			<ProjectProcess />
		</main>
	);
};

export default TasteBudsPage;
