import os
# This script creates a set of directories and files for Next.js components.
# The directories and files will be created in the same directory where the script is run.
# If you want to specify a different directory, you can modify the os.makedirs and open calls with the desired path.

# Step 1: Define the folder names for the components
folder_names = [
    "01_ProjectHero",
    "02_ProjectOverview",
    "03_TheProcess",
    "04_SecondaryResearch",
    "05_PrimaryResearch",
    "06_UserInterviews",
    "07_CompetitorAnalysis",
    "08_NarrowingTheScope",
    "09_UserPersonas",
    "10_UserStories",
    "11_UserFlows",
    "12_InformationArchitecture",
    "13_Sketches",
    "14_GuerillaTest",
    "15_LowFidelity",
    "16_Branding",
    "17_HighFidelity",
    "18_UsabilityTest1",
    "19_DesignIterations1",
    "20_UsabilityTest2",
    "21_Limitations",
    "22_FinalPrototype",
    "23_Reflection",
    "24_NextSteps",
]

# Step 2: Define the template for the component files
template = """
import React from 'react';
import styles from "./$COMPONENT_NAME$.module.scss";
import Link from "next/link";
import Image from "next/image";

const $COMPONENT_NAME$ = () => {
  return (
    <div>
      {/* Add your component content here */}
    </div>
  );
};

export default $COMPONENT_NAME$;
"""
# Step 3: Create the directories and files for each component
for folder_name in folder_names:
    _, file_name = folder_name.split("_")
    os.makedirs(folder_name, exist_ok=True)
    with open(os.path.join(folder_name, f"{file_name}.tsx"), "w") as file:
        file.write(template.replace("$COMPONENT_NAME$", file_name))
    open(os.path.join(folder_name, f"{file_name}.module.scss"), "w").close()
