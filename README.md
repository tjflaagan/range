# Range

A general purpose attack-defense range for zero-config deployment

## Usage

1. Drop each service into a folder in the [`./services`](services) directory.  Each service must have a `docker-compose.yml` file that defines the service, or a `deploy.sh` which starts the service. ([Services README](./services)).
3. Drop each checker script in the [`./checkers`](checkers) directory.  Each checker directory must be named the same as the service it corresponds to. ([Checkers README](./checkers)).
4. Run `cp sample.env .env` and modify the [`.env`](sample.env) as desired for all configuration options
5. Run `bash scripts/install.sh` to install all dependancies.
6. Run `bash scripts/up.sh` to start the range.
7. Distribute the printed team links to each team, which will allow them to download the VPN configs and credentials.

To temporarily stop the range, run `bash scripts/down.sh`.
To delete all data associated with the range, run `bash scripts/clear.sh`.

> [!WARNING] 
> `scripts/clear.sh` runs a docker image and volume prune.  This can have unintended consequences if you have other docker containers on the host system.  Use with caution.

## Connecting to the Range
Credentials for all services are printed to STDOUT during the range startup.

For local testing, you can get a shell inside the range environment with the command `bash scripts/rangemaster.sh`.

By default, frontend is at `http://10.101.0.6:80` inside of the range and `http://<server>:80` from outside the range.

As long as the `SERVER_URL` is properly set and port forwarding is enabled for UDP 51820, you can connect to the range from anywhere with the Wireguard client.
Wireguard configs are stored in the [`.docker/vpn`](..docker/vpn) directory, or can be downloaded from the API at `http://<server>:8000/vpn/<team_id>/wg<vpn_id>.conf`. (i.e. `http://api/vpn/1/wg1.conf`)

> [!NOTE]
> Team IDs, Service IDs, and VPN IDs are all 1-indexed.  This is to avoid subnetting/IP confusion.

## API Quickstart
By default, API is at `http://10.101.0.2:80` inside the range and `http://<server>:8000` from outside the range.

- To get all targets, `GET /hosts`.
- To get flag IDs, `GET /flagids`.
- To submit a flag, `POST /steal`
- To list scores, `GET /scores`
- To list detailed scoring checks, `GET /checks`

For full API documentation, visit `http://10.101.0.2/docs`


# Network

The range network is defined in [`docker-compose.yaml`](docker-compose.yaml):
- Range network: `10.100.0.0/15`
  - Infrastructure subnet: `10.101.0.0/16`
    - VPN Server: `10.101.0.1` (hostname `vpn`) - NAT Source for all traffic (players and checkers)
    - API: `10.101.0.2` (hostname `api`)
    - Docker Registry: `10.101.0.3` (hostname `registry`)
    - Rangemaster: `10.101.0.5` (hostname `rangemaster`) - For troubleshooting
    - Frontend: `10.101.0.6` (hostname `frontend`)
  - Team subnet: `10.100.<team_id>.0/24`
    - Service host: `10.100.<team_id>.<service_id>` (hostname `team<team_id>-<service_name>` - i.e. `team1-web`)
- Internal network: `10.102.0.0/16`
  - Ticker: `10.102.0.1` (hostname `ticker`)
  - API: `10.102.0.2` (hostname `api`)
  - DB: `10.102.0.3` (hostname `db`)
  - Rangemaster: `10.102.0.5` (hostname `rangemaster`)
  - Frontend: `10.102.0.6` (hostname `frontend`)
- Checker network: `10.103.0.0/16`
  - VPN Server: `10.103.1.1` (hostname `vpn`)
  - Ticker: `10.103.1.2` (hostname `ticker`)
  - Docker Registry: `10.103.1.3` (hostname `registry`)
  - Rangemaster: `10.103.1.5` (hostname `rangemaster`)
  - Checker: `10.103.2.<service_id` (hostname `checker-<service_name>` - i.e. `checker-web`)



# Service Archive
- SECCONF (argv) ~40 services: https://github.com/HITB-CyberWeek
- ICC (checklib) ~15 services: https://github.com/CybersecNatLab
- HACKERDOM (custom/checklib) ~40 services: https://github.com/HackerDom
- C4T-BUT-S4D (checklib) ~30 services: https://github.com/C4T-BuT-S4D
- FAUST (faust) ~50 services: https://github.com/fausecteam

- More: (checklib dependants): https://github.com/pomo-mondreganto/checklib/network/dependents



# License

This work is licensed under a
[Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License][cc-by-nc-sa].

[![CC BY-NC-SA 4.0][cc-by-nc-sa-image]][cc-by-nc-sa]

[cc-by-nc-sa]: http://creativecommons.org/licenses/by-nc-sa/4.0/
[cc-by-nc-sa-image]: https://licensebuttons.net/l/by-nc-sa/4.0/88x31.png
[cc-by-nc-sa-shield]: https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-lightgrey.svg
