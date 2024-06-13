---
sidebar_position: 30
---
# Socket Warp Listener
AdminGate内にSWLが設置されており、QUIC接続を受け付けている。SWCによってQUIC接続されると、REST APIによるTCPポート開設要求を受け付けるようになる。
ポートが開設されると、SWLにそのポートで接続したソケットがSWCにワープされるようになり、機器に接続できる。