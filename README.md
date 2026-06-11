EnergyMap is a full-stack web application that maps household and business energy consumption in real time, identifies surpluses and deficits, and automatically redistributes energy across the grid using a distribution algorithm. Built on real-world data from a Dutch energy hackathon (Avisi).

---

## Background

The Dutch energy grid is full ("stroomnet is vol"). Neighborhoods generate more solar energy than the grid can absorb, while others run consistent deficits. EnergyMap makes this problem visible — and starts solving it.

This project originated from a hackathon organized by Avisi, where we received a real dataset: hourly energy readings for a full year from 100 houses and 2 companies. We never finished it then. We're finishing it now.

---

## Features

- **3D interactive map** — TomTom-powered map with houses and companies color-coded by energy surplus (green) or deficit (red)
- **Personal dashboard** — per-address energy consumption and production telemetry with historical graphs
- **Distribution algorithm** — automatically shifts surplus energy from overproducing addresses to underproducing ones
- **Real dataset** — seeded with Avisi hackathon data: 100 houses + 2 companies, hourly readings over a full year

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | Angular |
| Backend | C# (.NET) |
| Map | TomTom Maps SDK (3D) |
| Database | (TBD) |
| Dataset | Avisi hackathon CSV — hourly energy readings |