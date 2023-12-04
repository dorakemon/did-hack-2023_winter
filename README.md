# An Anonymous Door Unlocking System with Anonymity Revocation Capability

## Participants
- dorakemon (Ken Watanabe)
- HarutoKimura
- mrtkh (Kohei Morita)
- 0xvon

All members are from Sako laboratory of Waseda University in Tokyo

## Introduction
An Anonymous Door Unlocking System is a privacy-preserving, secure entry solution for lab environments. Utilizing verifiable credentials with BBS+ signature scheme and Decentralized Web Nodes (DWN) and Zero Knowledge Proof (ZKP) stuffs. 
This system allows lab members to unlock the lab’s door anonymously, without disclosing their identity, using an unlinkable selective disclosure feature, except for the fact that they are authorized lab members.
These hidden attributes can be revealed by an opener, powerful authority, when something bad is happening, using newly  created ZKP with BBS+ signature (Anonymity Revocation).
The holder of VC can select 
This technology extends beyond door access apps and can be applied to all general anonymous systems.

## Table of Contents
- Introduction
- Standard VC Ecosystem
- New VC Ecosystem We suggest
- Solving with ZKP
- Tech applicability
- Tech stuff and reference
- Tech resources we created

## Standard VC Ecosystem
The ecosystem of Verifiable Credentials (VCs) involves a system where digital credentials can be securely and reliably issued, held, and verified. Basically there are three roles, Issuer, Holder and Verifier. 

## New VC Ecosystem We suggest
In our verifiable credential’s ecosystem, we expand upon the standard triad of roles—Issuer, Holder, and Verifier—by introducing a fourth role known as the 'Opener.' The Opener is a trusted entity appointed at the time of the verifiable presentation (VP) and whose involvement is consented to by both the Holder and the Verifier during the authentication process.

Anonymous authentication is defined as the authentication process where the Holder's user identifier is kept confidential from the Verifier. Also, 'Personal Identification' refers to the situation where the Opener obtains and identifies the user identifier of the Holder who performed anonymous authentication.

We will explain an overview of Personal Identification. When issuing a VC to a Holder, the Issuer assigns a user identifier (uid) and remembers the information including the uid. The Opener generates a key pair consisting of a private key (Osk) and a public key (Opk).

During proof verification, the Holder and Verifier designate the Opener, and the Holder encrypts the uid with the Opener's public key Opk. In addition, it is proven that the uid is encrypted with Opk, and that this uid matches the uid included in the VC. With the above proof, when the Opener performs Personal Identification, it is confirmed by the Verifier that the Opener, who owns the Osk, can decrypt Enc(Opk, uid), and that the uid obtained by decryption is linked to the Holder's information held by the Issuer.

Next, let's assume that after the proof verification is completed, the Verifier requests the Opener to identify the Holder. The Verifier submits the authentication log and Enc(Opk, uid) to the Opener to make the request. The Opener, having received the Enc(Opk, uid), decrypts it using the private key Osk and obtains the uid. By inquiring with the Issuer based on the information derived from the uid, the Opener identifies the Holder, thus completing the Personal Identification.

![image](https://github.com/dorakemon/did-hack-2023_winter/assets/51844896/00d622e4-8894-492e-9bec-4f38834a063b)

Figure 1 Enhanced VC Ecosystem Model

## What do we demonstrate?

In our demonstration, we showcased our innovative VC ecosystem designed for secure lab access, incorporating Decentralized Web Nodes (DWN). The demonstration was structured to simplify and effectively communicate our concept:

Credential Presentation: In this scenario, when a lab member (the prover) presents their Verifiable Credentials (VCs), the Issuer does not issue a new user identity. This simplifies the process by relying on pre-existing VCs that the lab member already possesses.

Opener's Role Simplified: Instead of following the previous section’s method where the Opener decrypts the user identifier (uid) to discover the lab member’s identity, we streamlined the process. In our demonstration, the Opener has the ability to directly reveal the lab member's identity by accessing the information encoded in the VC. This approach bypasses the need to consult the Issuer to match the uid, making the identification process more direct and efficient.

This streamlined approach in our demonstration was designed to make the understanding of our system's functionality more straightforward, particularly focusing on the ease and efficiency of the Opener's role in identity verification. The entire access procedure is streamlined as follows:

0. Initialization: The lab member, henceforth referred to as the Holder, initiates access by launching our specialized lab wallet application. Within the application, they select the relevant attributes that verify their lab membership.

1. Authentication Request: The Holder scans a QR code prominently displayed at the lab entrance. Scanning this code triggers a resolution process via a DID Resolver, which discerns the Verifier's Decentralized Identifier (DID).

2. Credential Submission: The Holder's wallet app communicates with the Verifier’s Node, transmitting their Verifiable Credential (VC) securely which has chosen attributes by the Holder. The Holder selectively discloses the attributes.

3. Credential Relay: Upon receipt, the Verifier’s Node acts as an intermediary, relaying the Holder's VC to the Verifier’s local node synchronizing with it.

4. Verification Process: The Verifier reviews the presented VC, assessing its authenticity and the validity of the claims it contains, confirming whether the Holder is indeed authorized to access the lab.

5. Access Granting: Upon successful verification of the VC's integrity and the legitimacy of the Holder's claim, the Verifier executes a door opening script, signaling the lab's access door handle system to unlock the door.

6. Incident Resolution: In the event of an incident the following day—such as finding the lab in disarray—the designated Opener (e.g., a lab professor) reviews the access logs. Utilizing their private key, the Opener decrypts the VCs of individuals who accessed the lab the previous day. This action reveals the identifiers of the lab visitors without compromising their privacy, allowing for a responsible and discreet follow-up.

This demonstration underscores our commitment to privacy, security, and efficiency by leveraging cutting-edge technology to facilitate a seamless yet secure lab access system.


![image](https://github.com/dorakemon/did-hack-2023_winter/assets/51844896/3d3ea6af-cc85-4db8-a7ed-03deeed838ae)

Figure 2 Comprehensive Overview of Our Secure Lab Ecosystem

## Solving with ZKP


We have expanded the existing BBS+ Signature Proof of Knowledge (ZKP) by adding new elements to the proof. The enhancements to the new ZKP to verify that encrypted uid, `Enc(Opk, uid)` is encrypted correctly and verifier can verify below:

- The encrypted uid is truly related to VC
- The public key used for encryption is truly Opener’s who the verifier consents.

## Tech Applicability
This technology can also be applied to other applications such as Bike Share and Taxi Dispatch to attach an anonymous authorization function. This section explains how these applications work.

### Bike Share
In the context of Bike Share, the system can revolutionize how users access and use shared bicycles in urban environments.

**Secure Access via Wallet App**

Users can unlock and access cycles through the wallet app, selecting relevant credentials to authenticate themselves without revealing their full identity. This process ensures only authorized users can access the cycles.

**Selective Credential Disclosure**

The app's use of BBS+ signatures enables users to prove they meet the usage criteria (like age or membership status) without sharing any additional personal information.

**Decentralized Verification with DWN**

The use of DWN ensures that all user verifications are securely managed and logged without centralizing data, enhancing privacy and reducing the risk of data breaches.

**Enhanced User Privacy**

Users can confidently use sharing cycles without concerns about their movements or usage patterns being tracked and stored, promoting a more privacy-conscious sharing economy.

**Revoking Anonymity**

If a user handles the shared cycle roughly, damages it, or breaks rules such as not returning to the designated place or delaying the return, the Opener can revoke the user's anonymity using their secret key to identify the individual responsible.

### Taxi Dispatch (OntID)
The application can be adapted to facilitate anonymous taxi dispatch services, ensuring passenger privacy while maintaining necessary security and authentication protocols.

**Anonymous Ride Booking**

Passengers can book rides through the app, proving their validity as customers without revealing their identities to the taxi service. This process uses Zero-Knowledge Proofs to confirm payment or account status.

**Secure Driver Authentication**

Drivers can also authenticate themselves using the system, ensuring passengers that they are using a verified service without the drivers having to disclose personal information.

**Incident Tracking and Resolution**

In cases of disputes or incidents, the Opener role can be employed to discreetly access specific encrypted travel logs and the anonymous identity information of both the passenger and the driver. This targeted approach ensures that only relevant data is revealed, thus maintaining the privacy of all users.

## Tech Stuff and reference

### Frontend Development

echnology Stack
Our wallet application, serving as the user interface for lab members, is developed using React and TypeScript. This combination provides a robust and scalable frontend, ensuring a responsive and user-friendly experience.

User Interface: The app facilitates easy selection of verifiable credentials (VCs) and QR code scanning, designed with intuitive navigation and clear visual cues to enhance user interaction.

### Backend Development

Selective Disclosure with BBS+ Signature: For backend processing, we've implemented the BBS+ signature scheme. This advanced cryptographic protocol enables the selective disclosure of VC attributes, allowing lab members to share only the necessary information while keeping other personal details private.

Proof System Using Elliptic Curve ElGamal: To generate Zero-Knowledge Proofs (ZKP), we utilize the Elliptic Curve ElGamal encryption scheme. This system enhances the security of our proofs, ensuring that verification can occur without revealing the underlying data.

### Decentralized Web Nodes (DWN) Integration

VC Transmission via DWN: Our system employs DWNs to securely transmit the prover's VC to the verifier. This decentralized approach not only enhances security but also ensures efficient and reliable data transfer.

Synchronization with Local Verifier Nodes: Upon reaching the verifier's node, the VC is synchronized with the local verifier’s node. This process ensures that the verifier has the most up-to-date and accurate data for verification.

### Hardware Integration and Access Control

Raspberry Pi as Verifier: In our setup, we use Raspberry Pi as the verifier hardware. It's responsible for receiving and verifying the VC presented by the lab member.
Python Script for Door Activation: Once the VC is verified, a Python script is executed on the Raspberry Pi, which activates the lab’s door unlocking system. This script is a crucial component, as it translates successful digital verification into physical access control, opening the door for authorized individuals.

## Tech Resources we created

Holder Wallet

https://github.com/dorakemon/did-hack-2023_winter/tree/main/holder-wallet-vc

Verifier app

https://github.com/dorakemon/did-hack-2023_winter/tree/main/verifier-app-for-iot

Library for jsonld and bbs+signatures

https://github.com/dorakemon/jsonld-proofs

Wasm Library for bbs+ signature 

https://github.com/dorakemon/rdf-proofs-wasm

Library for bbs+ signature 

https://github.com/dorakemon/rdf-proofs

This library is for BBS+signature using docknetwork and artworks and we extended to implement elliptic elgamal verifiable encryption



## References

- World Wide Web Consortium : Verifiable Credentials Data Model v2.0. URL: https://www.w3.org/TR/vc-data-model-2.0/ (2023.11.30)
- Decentralized Identity Foundation: Decentralized Web Node. URL:https://identity.foundation/decentralized-web-node/spec/ (2023.11.30)
- Tbd: Developer.tbd.website. URL:https://developer.tbd.website/docs/web5/learn/decentralized-web-nodes/ (2023.11.30)
- Kohei Morita, Ken Watanabe, Rui Inoue, Kazue Sako: Verifiable Presentation with Anonymity Revocation by Designated Opener, IPSJ SIG Technical Report

