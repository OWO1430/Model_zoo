# Project BioPY
---

## High-Level Summary
We have crafted a comprehensive, dynamic database that seamlessly integrates publicly available large-scale biomedical datasets, space biology datasets, and pertinent pre-trained models.

1. Our database meticulously connects both terrestrial and space datasets with their associated pre-trained models.
2. We've pinpointed the primary challenges in space biology and curated the most relevant datasets and models to address them.
3. We've established a user-friendly website to facilitate scientists in leveraging models for transfer learning and also encourage their active contributions.
4. With our interactive platform bolstered by a robust dual-linkage database, we envision the creation of a cohesive dataset-model map in the future. This map will elucidate the interrelationships between models and datasets, fostering deeper insights and propelling forward the pace of research.

---

## Deployment/Run locally
In order to run the frontend locally, you need to follow these steps.
1. Clone the repository:
   ```
   $ git clone https://github.com/OWO1430/Model_zoo/
   ```
2. Instal the dependancies:
   ```
   $ npm install 
   ```
3. Fill in the required environment variables in the ".env" file with the help of the ".env.example"
   ```
   GOOGLE_CLIENT_ID="Your ID"
   GOOGLE_CLIENT_SECRET="Your secret"
   NEXTAUTH_SECRET="Your secret"
   ```
   1. To get the google client id and secret, visit [Google Cloud console](https://console.cloud.google.com/apis/credentials/oauthclient) for more.
   2. To generate the NEXTAUTH_SECRET, run this following command:
  ```
  $ openssl rand -base64 32
  ```

### Problems you may encouter
1. When cliking/compiling the "Network" button on the sidebar, errors might occur.  
  > The cause of the problem is that the local development server uses only http protocol, not https.  
  > Since we've likned external resources using https protocol, error might occour, this won't happen on cloud deployments.

## External links/ resources used 
1. The 3D graph on the "network" page - [Source](https://rawgit.com/jexp/neo4j-3d-force-graph/master/particles.html")  
   > We used it to demonstrate our future vision, creating an intuitive graph on how the models and datas in the database relate to each others!

--- 


## What are the corresponding datasets?
### Microbiology

Open Source Repository: NCBI Microbiome Central - A collection of databases and tools designed to support the study of microbiomes.
Space Experiment Data: NASA GeneLab - Provides datasets from numerous space biology experiments. Some of these experiments have focused on the effects of space on microbial organisms, including bacteria and fungi.
### Cell and Molecular Biology

Open Source Repository: GEO (Gene Expression Omnibus) - A public functional genomics data repository that archives and freely distributes microarray, next-generation sequencing, and other forms of high-throughput functional genomics data.
Space Experiment Data: NASA GeneLab - Contains datasets from various cell biology experiments conducted in space. For instance, studies on human cells to understand the impact of microgravity on cellular function.
### Plant Biology

Open Source Repository: TAIR (The Arabidopsis Information Resource) - Provides a comprehensive collection of data and information on the genetics and molecular biology of the plant Arabidopsis thaliana.
Space Experiment Data: NASA GeneLab - Includes experiments that investigate the effects of spaceflight on different plant species. For example, how plants grow in microgravity or how space radiation affects plant genetics.
### Animal Biology

Open Source Repository: Ensembl - Offers high-quality genome-wide sequence and annotation data for vertebrates and key model organisms.
Space Experiment Data: NASA GeneLab - Houses datasets from experiments on various animals, like rodents, sent to space. These studies can range from understanding bone density loss in microgravity to more complex behavioral studies.
### Developmental, Reproductive and Evolutionary Biology:

Open Source Repository: EvoDevoJ (Evolution & Development Journal) - While not a database in the traditional sense, this is a leading journal in the field of evolutionary developmental biology, and many articles provide supplemental data.
Space Experiment Data: NASA GeneLab - While it may not have a vast collection in this specific field, there are some datasets that explore how microgravity affects development, reproduction, and potentially evolutionary trajectories. For instance, studies might investigate how animals develop in space from embryo to maturity.

Microbiology

Human Microbiome Project (HMP) Data: A comprehensive resource that has sequences of microbial genomes found in the human body.
HMP Dataset
IMG/M: The Integrated Microbial Genomes & Microbiomes system offers tools for the analysis of microbial community genomes.
IMG/M
Cell and Molecular Biology

The Cancer Genome Atlas (TCGA): Detailed genomic information for over 30 types of cancer.
TCGA Dataset
Gene Expression Omnibus (GEO): A public functional genomics data repository supporting MIAME-compliant data submissions.
GEO
Plant Biology

The 1001 Genomes Project for Arabidopsis thaliana: Sequencing of over 1000 different strains of the model plant Arabidopsis.
1001 Genomes Dataset
Plant PhenomeNET: A dataset connecting phenotypic effect with gene function in plants.
Plant PhenomeNET
Animal Biology

Mouse Genome Informatics (MGI): A comprehensive database on the genetics and genomics of the laboratory mouse.
MGI
Zebrafish Model Organism Database (ZFIN): Provides integrated access to curated zebrafish genetic and genomic data.
ZFIN
Developmental, Reproductive and Evolutionary Biology

FaceBase: Datasets aimed at studying craniofacial development and disorders.
FaceBase
TreeBASE: A repository of phylogenetic information, specifically user-submitted phylogenetic trees and the data used to generate them.
TreeBASE
Bgee: A database to retrieve and compare gene expression patterns in multiple animal species, produced from multiple data types such as RNA-seq, microarrays, and in situ hybridization.
Bgee


## How users use a pre-train model?
### GeneLab's data corresponding Earth models.
RNA-Seq data from plants to study gene expression changes in space:

DeepCount: A deep learning model for predicting gene expression levels based on sequence information.
D-GEX: Uses deep learning to predict gene expression across different conditions.
Transformer models like BERT and its variations have been adapted for biological sequences in tools like BioBERT or BioTransformers. Though they aren't pretrained on RNA-Seq data per se, they can be fine-tuned on such data.
Microbial gene expression data to study microbial behavior in space:

DeepMAsED: A deep learning-based method for differential expression analysis.
DRAGON: A deep learning model that can predict gene expression levels from the gene's regulatory region sequence.
Again, Transformer models adapted for biological sequences could be fine-tuned on microbial gene expression datasets.
Animal protein expression data to study protein synthesis changes in microgravity:

DeepProfile: Uses autoencoders to learn embeddings of gene expression profiles, which can be used for various downstream tasks.
DeepAffinity: Predicts protein-ligand affinity using convolutional neural networks.
Alphafold: Though it's a model for protein structure prediction, it signifies how deep learning models can be used effectively for protein-related tasks. Fine-tuning a model like Alphafold on protein expression data can provide meaningful embeddings or predictions.

So, take using 

### Other image datas and corresponding pre-trained models
1. Microscopy of Cellular Structures: Observing cells in space can reveal how microgravity affects cellular structure and function. For instance, observing changes in the cytoskeleton of cells can provide insights into how cells sense and adapt to microgravity.

2. Bone Densitometry: Astronauts in space undergo bone density loss. Imaging the bone over time using densitometry can help in understanding the rate of bone degradation and the efficacy of countermeasures.

3. MRI Scans of Astronauts' Brains: Some studies have indicated changes in astronauts' brain structures after prolonged spaceflight. MRI scans can help in mapping these changes and understanding their implications.

4. Optical Coherence Tomography (OCT) for Eye Health: Extended space missions can affect eye health. OCT provides detailed images of the retina, helping in monitoring the health of an astronaut's eyes over time.

5. Biofilm Formation: Microorganisms in space have been observed to form biofilms differently than on Earth. Observing these structures can help understand microbial behavior in space.

6. Plant Growth Patterns: Microgravity affects how plants grow. Imaging the growth patterns can provide insights into plant behavior in space, crucial for potential long-term space missions where plants might be used for food and oxygen.

* Convolutional Neural Networks (CNNs):

* VGG (VGG16, VGG19): These are excellent for basic image classification tasks and can be fine-tuned for specific space biology imaging data.
* ResNet (ResNet50, ResNet101): These have deeper architectures and can capture more complex patterns in images.
* InceptionV3: Known for its efficiency and high performance in image classification.
* U-Nets: Particularly useful for segmentation tasks, such as segmenting specific cellular structures in microscopy images.

### An example
1. Goal & Hypothesis:
The space biologist aims to decipher how specific plant genes react to the microgravity conditions in space. She hypothesizes that certain genes play a pivotal role in plant adaptation to space and may be responsible for observed changes in growth or health.
2. Data Collection:
She begins with the Arabidopsis thaliana datasets OSD-427 and OSD-480 from NASA GeneLab which have RNA-Seq data of the plant in microgravity. She also has her own RNA-Seq data from a similar experiment she conducted recently.
3. Pre-trained Model Exploration:
On browsing the model zoo, she identifies a promising model from 2022 named scBERT specifically designed for RNA-Seq data. The model has been pre-trained on a vast array of Earth-based RNA-Seq datasets, making it adept at capturing the nuances of gene expression data.
4. Data Preprocessing:
Before utilizing scBERT, she pre-processes the RNA-Seq data to: Normalize gene expression values, handle missing data
and align sequences and quantify them
5. Transfer Learning with scBERT:
She loads the scBERT model and fine-tunes it using her space-based RNA-Seq datasets: The model is trained on OSD-427, OSD-480, and her experiment data.
During training, she adjusts the model's parameters slightly to adapt its knowledge to the specifics of microgravity-based gene expressions.
6. Results & Interpretation:
Once training is completed, she utilizes the fine-tuned scBERT model to: Identify genes that have significantly altered expression in space.
Understand the potential biological pathways impacted by these genes. Determine if any of these genes are associated with stress responses, growth patterns, or other vital processes in the plant.
7. Contribute
The scientist upload her model to the model zoo.


## Aim: 
1. To **design a comprehensive database** of publicly available biomedical datasets that could be used to pretrain different models for a “model zoo,” and 
2. To determine relevant publicly available space biology datasets that could then be used to refine the models to investigate specific space biology questions.

