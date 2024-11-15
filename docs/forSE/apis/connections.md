---
sidebar_position: 20
---

# 接続先関連API

接続先に関するAPIのリファレンスです。

## List Connections

List connections.

<!-- omit in toc -->
### GET /api/session/data/{{data_source}}/connections

#### Headers

None.

#### Path Parameters

- data_source (string, required) - Data source

---

## Details of Connection

Details of connection.

<!-- omit in toc -->
### GET /api/session/data/{{data_source}}/connections/{{connection}}

#### Headers

None.

#### Path Parameters

- data_source (string, required) - Data source
- connection (integer, required) - Connection identifier

#### Query Parameters

- token (string, required) - Auth Token

#### Request Body

None.

### Response

#### Status Code

- 200 - OK

#### Response Body

**@TODO**

---

## Details of Connection Parameters

Details of connection parameters.

<!-- omit in toc -->
### GET /api/session/data/{{data_source}}/connections/{{connection}}/parameters

#### Headers

None.

#### Path Parameters

- data_source (string, required) - Data source
- connection (integer, required) - Connection identifier

#### Query Parameters

- token (string, required) - Auth Token

#### Request Body

None.

### Response

#### Status Code

- 200 - OK

#### Response Body

**@TODO**

---

## Details of Connection History

Details of connection history.

<!-- omit in toc -->
### GET /api/session/data/{{data_source}}/connections/{{connection}}/history

#### Headers

None.

#### Path Parameters

- data_source (string, required) - Data source
- connection (integer, required) - Connection identifier

#### Query Parameters

- token (string, required) - Auth Token

#### Request Body

None.

### Response

#### Status Code

- 200 - OK

#### Response Body

**@TODO**

---

## Details of Connection Sharing Profiles

Details of connection sharing profiles.

<!-- omit in toc -->
### GET /api/session/data/{{data_source}}/connections/{{connection}}/sharingProfiles

#### Headers

None.

#### Path Parameters

- data_source (string, required) - Data source
- connection (integer, required) - Connection identifier

#### Query Parameters

- token (string, required) - Auth Token

---

## List Sharing Profiles

List sharing profiles.

<!-- omit in toc -->
### GET /api/session/data/{{data_source}}/sharingProfiles

#### Headers

None.

#### Path Parameters

- data_source (string, required) - Data source

#### Query Parameters

- token (string, required) - Auth Token

#### Request Body

None.

### Response

#### Status Code

- 200 - OK

#### Response Body

**@TODO**

---

## List Active Connections

List active connections.

<!-- omit in toc -->
### GET /api/session/data/{{data_source}}/activeConnections

#### Headers

None.

#### Path Parameters

- data_source (string, required) - Data source

#### Query Parameters

- token (string, required) - Auth Token

#### Request Body

None.

### Response

#### Status Code

- 200 - OK

#### Response Body

**@TODO**

---

## Kill Connections

Kill connections.

<!-- omit in toc -->
### PATCH /api/session/data/{{data_source}}/activeConnections

#### Headers

- Content-Type (string, required) - application/json

#### Path Parameters

- data_source (string, required) - Data source

#### Query Parameters

- token (string, required) - Auth Token

#### Request Body

Body must be [json-patch](http://jsonpatch.com/) format.

```json
[
  {
    "op": "remove",
    "path": "/{{activeConnectionIdentifier}}"
  }
]
```

### Response

#### Status Code

- 200 - OK

#### Response Body

**@TODO**

---

## Create VNC Connection

Creates a VNC connection.

<!-- omit in toc -->
### POST /api/session/data/{{data_source}}/connections

#### Headers

- Content-Type (string, required) - application/json

#### Path Parameters

- data_source (string, required) - Data source

#### Query Parameters

- token (string, required) - Auth Token

#### Request Body

**@TODO**

```json
{
  "parentIdentifier": "ROOT",
  "name": "test",
  "protocol": "vnc",
  "parameters": {
    "port": "",
    "read-only": "",
    "swap-red-blue": "",
    "cursor": "",
    "color-depth": "",
    "clipboard-encoding": "",
    "disable-copy": "",
    "disable-paste": "",
    "dest-port": "",
    "recording-exclude-output": "",
    "recording-exclude-mouse": "",
    "recording-include-keys": "",
    "create-recording-path": "",
    "enable-sftp": "true",
    "sftp-port": "",
    "sftp-server-alive-interval": "",
    "enable-audio": "",
    "audio-servername": "",
    "sftp-directory": "",
    "sftp-root-directory": "",
    "sftp-passphrase": "",
    "sftp-private-key": "",
    "sftp-username": "",
    "sftp-password": "",
    "sftp-host-key": "",
    "sftp-hostname": "",
    "recording-name": "",
    "recording-path": "",
    "dest-host": "",
    "password": "",
    "username": "",
    "hostname": ""
  },
  "attributes": {
    "max-connections": "",
    "max-connections-per-user": "",
    "weight": "",
    "failover-only": "",
    "guacd-port": "",
    "guacd-encryption": "",
    "guacd-hostname": ""
  }
}
```

### Response

#### Status Code

- 200 - OK

#### Response Body

**@TODO**

---

## Create SSH Connection

Creates a SSH connection.

<!-- omit in toc -->
### POST /api/session/data/{{data_source}}/connections

#### Headers

- Content-Type (string, required) - application/json

#### Path Parameters

- data_source (string, required) - Data source

#### Query Parameters

- token (string, required) - Auth Token

#### Request Body

**@TODO**

```json
{
  "parentIdentifier": "ROOT",
  "name": "test",
  "protocol": "ssh",
  "parameters": {
    "port": "",
    "read-only": "",
    "swap-red-blue": "",
    "cursor": "",
    "color-depth": "",
    "clipboard-encoding": "",
    "disable-copy": "",
    "disable-paste": "",
    "dest-port": "",
    "recording-exclude-output": "",
    "recording-exclude-mouse": "",
    "recording-include-keys": "",
    "create-recording-path": "",
    "enable-sftp": "",
    "sftp-port": "",
    "sftp-server-alive-interval": "",
    "enable-audio": "",
    "color-scheme": "",
    "font-size": "",
    "scrollback": "",
    "timezone": null,
    "server-alive-interval": "",
    "backspace": "",
    "terminal-type": "",
    "create-typescript-path": "",
    "hostname": "",
    "host-key": "",
    "private-key": "",
    "username": "",
    "password": "",
    "passphrase": "",
    "font-name": "",
    "command": "",
    "locale": "",
    "typescript-path": "",
    "typescript-name": "",
    "recording-path": "",
    "recording-name": "",
    "sftp-root-directory": ""
  },
  "attributes": {
    "max-connections": "",
    "max-connections-per-user": "",
    "weight": "",
    "failover-only": "",
    "guacd-port": "",
    "guacd-encryption": "",
    "guacd-hostname": ""
  }
}
```

### Response

#### Status Code

- 200 - OK

#### Response Body

**@TODO**

---

## Create RDP Connection

Creates a RDP connection.

<!-- omit in toc -->
### POST /api/session/data/{{data_source}}/connections

#### Headers

- Content-Type (string, required) - application/json

#### Path Parameters

- data_source (string, required) - Data source

#### Query Parameters

- token (string, required) - Auth Token

#### Request Body

**@TODO**

```json
{
  "parentIdentifier": "ROOT",
  "name": "test",
  "protocol": "rdp",
  "parameters": {
    "port": "",
    "read-only": "",
    "swap-red-blue": "",
    "cursor": "",
    "color-depth": "",
    "clipboard-encoding": "",
    "disable-copy": "",
    "disable-paste": "",
    "dest-port": "",
    "recording-exclude-output": "",
    "recording-exclude-mouse": "",
    "recording-include-keys": "",
    "create-recording-path": "",
    "enable-sftp": "",
    "sftp-port": "",
    "sftp-server-alive-interval": "",
    "enable-audio": "",
    "security": "",
    "disable-auth": "",
    "ignore-cert": "",
    "gateway-port": "",
    "server-layout": "",
    "timezone": "",
    "console": "",
    "width": "",
    "height": "",
    "dpi": "",
    "resize-method": "",
    "console-audio": "",
    "disable-audio": "",
    "enable-audio-input": "",
    "enable-printing": "",
    "enable-drive": "",
    "create-drive-path": "",
    "enable-wallpaper": "",
    "enable-theming": "",
    "enable-font-smoothing": "",
    "enable-full-window-drag": "",
    "enable-desktop-composition": "",
    "enable-menu-animations": "",
    "disable-bitmap-caching": "",
    "disable-offscreen-caching": "",
    "disable-glyph-caching": "",
    "preconnection-id": "",
    "hostname": "",
    "username": "",
    "password": "",
    "domain": "",
    "gateway-hostname": "",
    "gateway-username": "",
    "gateway-password": "",
    "gateway-domain": "",
    "initial-program": "",
    "client-name": "",
    "printer-name": "",
    "drive-name": "",
    "drive-path": "",
    "static-channels": "",
    "remote-app": "",
    "remote-app-dir": "",
    "remote-app-args": "",
    "preconnection-blob": "",
    "load-balance-info": "",
    "recording-path": "",
    "recording-name": "",
    "sftp-hostname": "",
    "sftp-host-key": "",
    "sftp-username": "",
    "sftp-password": "",
    "sftp-private-key": "",
    "sftp-passphrase": "",
    "sftp-root-directory": "",
    "sftp-directory": ""
  },
  "attributes": {
    "max-connections": "",
    "max-connections-per-user": "",
    "weight": "",
    "failover-only": "",
    "guacd-port": "",
    "guacd-encryption": "",
    "guacd-hostname": ""
  }
}
```

### Response

#### Status Code

- 200 - OK

#### Response Body

**@TODO**

---

## Create Telnet Connection

Creates a Telnet connection.

<!-- omit in toc -->
### POST /api/session/data/{{data_source}}/connections

#### Headers

- Content-Type (string, required) - application/json

#### Path Parameters

- data_source (string, required) - Data source

#### Query Parameters

- token (string, required) - Auth Token

#### Request Body

**@TODO**

```json
{
  "parentIdentifier": "ROOT",
  "name": "test",
  "protocol": "telnet",
  "parameters": {
    "port": "",
    "read-only": "",
    "swap-red-blue": "",
    "cursor": "",
    "color-depth": "",
    "clipboard-encoding": "",
    "disable-copy": "",
    "disable-paste": "",
    "dest-port": "",
    "recording-exclude-output": "",
    "recording-exclude-mouse": "",
    "recording-include-keys": "",
    "create-recording-path": "",
    "enable-sftp": "",
    "sftp-port": "",
    "sftp-server-alive-interval": "",
    "enable-audio": "",
    "color-scheme": "",
    "font-size": "",
    "scrollback": "",
    "backspace": "",
    "terminal-type": "",
    "create-typescript-path": "",
    "hostname": "",
    "username": "",
    "password": "",
    "username-regex": "",
    "password-regex": "",
    "login-success-regex": "",
    "login-failure-regex": "",
    "font-name": "",
    "typescript-path": "",
    "typescript-name": "",
    "recording-path": "",
    "recording-name": ""
  },
  "attributes": {
    "max-connections": "",
    "max-connections-per-user": "",
    "weight": "",
    "failover-only": "",
    "guacd-port": "",
    "guacd-encryption": "",
    "guacd-hostname": ""
  }
}
```

### Response

#### Status Code

- 200 - OK

#### Response Body

**@TODO**

---

## Create Kubernetes Connection

Creates a Kubernetes connection.

<!-- omit in toc -->
### POST /api/session/data/{{data_source}}/connections

#### Headers

- Content-Type (string, required) - application/json

#### Path Parameters

- data_source (string, required) - Data source

#### Query Parameters

- token (string, required) - Auth Token

#### Request Body

**@TODO**

```json
{
  "parentIdentifier": "ROOT",
  "name": "test",
  "protocol": "kubernetes",
  "parameters": {
    "port": "",
    "read-only": "",
    "swap-red-blue": "",
    "cursor": "",
    "color-depth": "",
    "clipboard-encoding": "",
    "disable-copy": "",
    "disable-paste": "",
    "dest-port": "",
    "recording-exclude-output": "",
    "recording-exclude-mouse": "",
    "recording-include-keys": "",
    "create-recording-path": "",
    "enable-sftp": "",
    "sftp-port": "",
    "sftp-server-alive-interval": "",
    "enable-audio": "",
    "use-ssl": "",
    "ignore-cert": "",
    "color-scheme": "",
    "font-size": "",
    "scrollback": "",
    "backspace": "",
    "create-typescript-path": "",
    "hostname": "",
    "ca-cert": "",
    "namespace": "",
    "pod": "",
    "container": "",
    "client-cert": "",
    "client-key": "",
    "font-name": "",
    "typescript-path": "",
    "typescript-name": "",
    "recording-path": "",
    "recording-name": ""
  },
  "attributes": {
    "max-connections": "",
    "max-connections-per-user": "",
    "weight": "",
    "failover-only": "",
    "guacd-port": "",
    "guacd-encryption": "",
    "guacd-hostname": ""
  }
}
```

### Response

#### Status Code

- 200 - OK

#### Response Body

**@TODO**

---

## Update VNC Connection

Updates VNC connection.

<!-- omit in toc -->
### PUT /api/session/data/{{data_source}}/connections/{{connection}}

#### Headers

- Content-Type (string, required) - application/json

#### Path Parameters

- data_source (string, required) - Data source
- connection (integer, required) - Connection identifier

#### Query Parameters

- token (string, required) - Auth Token

#### Request Body

**@TODO**

```json
{
  "parentIdentifier": "ROOT",
  "name": "test",
  "identifier": "1",
  "activeConnections": 0,
  "protocol": "vnc",
  "parameters": {
    "port": "",
    "read-only": "",
    "swap-red-blue": "",
    "cursor": "",
    "color-depth": "",
    "clipboard-encoding": "",
    "disable-copy": "",
    "disable-paste": "",
    "dest-port": "",
    "recording-exclude-output": "",
    "recording-exclude-mouse": "",
    "recording-include-keys": "",
    "create-recording-path": "",
    "enable-sftp": "true",
    "sftp-port": "",
    "sftp-server-alive-interval": "",
    "enable-audio": "",
    "audio-servername": "",
    "sftp-directory": "",
    "sftp-root-directory": "",
    "sftp-passphrase": "",
    "sftp-private-key": "",
    "sftp-username": "",
    "sftp-password": "",
    "sftp-host-key": "",
    "sftp-hostname": "",
    "recording-name": "",
    "recording-path": "",
    "dest-host": "",
    "password": "",
    "username": "",
    "hostname": ""
  },
  "attributes": {
    "max-connections": "",
    "max-connections-per-user": "",
    "weight": "",
    "failover-only": "",
    "guacd-port": "",
    "guacd-encryption": "",
    "guacd-hostname": ""
  }
}
```

### Response

#### Status Code

- 204 - No Content

#### Response Body

This request does not return a response body.

---

## Update SSH Connection

Updates SSH connection.

<!-- omit in toc -->
### PUT /api/session/data/{{data_source}}/connections/{{connection}}

#### Headers

- Content-Type (string, required) - application/json

#### Path Parameters

- data_source (string, required) - Data source
- connection (integer, required) - Connection identifier

#### Query Parameters

- token (string, required) - Auth Token

#### Request Body

**@TODO**

```json
{
  "parentIdentifier": "ROOT",
  "name": "test",
  "identifier": "1",
  "activeConnections": 0,
  "protocol": "ssh",
  "parameters": {
    "port": "",
    "read-only": "",
    "swap-red-blue": "",
    "cursor": "",
    "color-depth": "",
    "clipboard-encoding": "",
    "disable-copy": "",
    "disable-paste": "",
    "dest-port": "",
    "recording-exclude-output": "",
    "recording-exclude-mouse": "",
    "recording-include-keys": "",
    "create-recording-path": "",
    "enable-sftp": "",
    "sftp-port": "",
    "sftp-server-alive-interval": "",
    "enable-audio": "",
    "color-scheme": "",
    "font-size": "",
    "scrollback": "",
    "timezone": null,
    "server-alive-interval": "",
    "backspace": "",
    "terminal-type": "",
    "create-typescript-path": "",
    "hostname": "",
    "host-key": "",
    "private-key": "",
    "username": "",
    "password": "",
    "passphrase": "",
    "font-name": "",
    "command": "",
    "locale": "",
    "typescript-path": "",
    "typescript-name": "",
    "recording-path": "",
    "recording-name": "",
    "sftp-root-directory": ""
  },
  "attributes": {
    "max-connections": "",
    "max-connections-per-user": "",
    "weight": "",
    "failover-only": "",
    "guacd-port": "",
    "guacd-encryption": "",
    "guacd-hostname": ""
  }
}
```

### Response

#### Status Code

- 204 - No Content

#### Response Body

This request does not return a response body.

---

## Update RDP Connection

Updates RDP connection.

<!-- omit in toc -->
### PUT /api/session/data/{{data_source}}/connections/{{connection}}

#### Headers

- Content-Type (string, required) - application/json

#### Path Parameters

- data_source (string, required) - Data source
- connection (integer, required) - Connection identifier

#### Query Parameters

- token (string, required) - Auth Token

#### Request Body

**@TODO**

```json
{
  "parentIdentifier": "ROOT",
  "name": "test",
  "identifier": "1",
  "activeConnections": 0,
  "protocol": "rdp",
  "parameters": {
    "port": "",
    "read-only": "",
    "swap-red-blue": "",
    "cursor": "",
    "color-depth": "",
    "clipboard-encoding": "",
    "disable-copy": "",
    "disable-paste": "",
    "dest-port": "",
    "recording-exclude-output": "",
    "recording-exclude-mouse": "",
    "recording-include-keys": "",
    "create-recording-path": "",
    "enable-sftp": "",
    "sftp-port": "",
    "sftp-server-alive-interval": "",
    "enable-audio": "",
    "security": "",
    "disable-auth": "",
    "ignore-cert": "",
    "gateway-port": "",
    "server-layout": "",
    "timezone": "",
    "console": "",
    "width": "",
    "height": "",
    "dpi": "",
    "resize-method": "",
    "console-audio": "",
    "disable-audio": "",
    "enable-audio-input": "",
    "enable-printing": "",
    "enable-drive": "",
    "create-drive-path": "",
    "enable-wallpaper": "",
    "enable-theming": "",
    "enable-font-smoothing": "",
    "enable-full-window-drag": "",
    "enable-desktop-composition": "",
    "enable-menu-animations": "",
    "disable-bitmap-caching": "",
    "disable-offscreen-caching": "",
    "disable-glyph-caching": "",
    "preconnection-id": "",
    "hostname": "",
    "username": "",
    "password": "",
    "domain": "",
    "gateway-hostname": "",
    "gateway-username": "",
    "gateway-password": "",
    "gateway-domain": "",
    "initial-program": "",
    "client-name": "",
    "printer-name": "",
    "drive-name": "",
    "drive-path": "",
    "static-channels": "",
    "remote-app": "",
    "remote-app-dir": "",
    "remote-app-args": "",
    "preconnection-blob": "",
    "load-balance-info": "",
    "recording-path": "",
    "recording-name": "",
    "sftp-hostname": "",
    "sftp-host-key": "",
    "sftp-username": "",
    "sftp-password": "",
    "sftp-private-key": "",
    "sftp-passphrase": "",
    "sftp-root-directory": "",
    "sftp-directory": ""
  },
  "attributes": {
    "max-connections": "",
    "max-connections-per-user": "",
    "weight": "",
    "failover-only": "",
    "guacd-port": "",
    "guacd-encryption": "",
    "guacd-hostname": ""
  }
}
```

### Response

#### Status Code

- 204 - No Content

#### Response Body

This request does not return a response body.

---

## Update Telnet Connection

Updates Telnet connection.

<!-- omit in toc -->
### PUT /api/session/data/{{data_source}}/connections/{{connection}}

#### Headers

- Content-Type (string, required) - application/json

#### Path Parameters

- data_source (string, required) - Data source
- connection (integer, required) - Connection identifier

#### Query Parameters

- token (string, required) - Auth Token

#### Request Body

**@TODO**

```json
{
  "parentIdentifier": "ROOT",
  "name": "test",
  "identifier": "1",
  "activeConnections": 0,
  "protocol": "telnet",
  "parameters": {
    "port": "",
    "read-only": "",
    "swap-red-blue": "",
    "cursor": "",
    "color-depth": "",
    "clipboard-encoding": "",
    "disable-copy": "",
    "disable-paste": "",
    "dest-port": "",
    "recording-exclude-output": "",
    "recording-exclude-mouse": "",
    "recording-include-keys": "",
    "create-recording-path": "",
    "enable-sftp": "",
    "sftp-port": "",
    "sftp-server-alive-interval": "",
    "enable-audio": "",
    "color-scheme": "",
    "font-size": "",
    "scrollback": "",
    "backspace": "",
    "terminal-type": "",
    "create-typescript-path": "",
    "hostname": "",
    "username": "",
    "password": "",
    "username-regex": "",
    "password-regex": "",
    "login-success-regex": "",
    "login-failure-regex": "",
    "font-name": "",
    "typescript-path": "",
    "typescript-name": "",
    "recording-path": "",
    "recording-name": ""
  },
  "attributes": {
    "max-connections": "",
    "max-connections-per-user": "",
    "weight": "",
    "failover-only": "",
    "guacd-port": "",
    "guacd-encryption": "",
    "guacd-hostname": ""
  }
}
```

### Response

#### Status Code

- 204 - No Content

#### Response Body

This request does not return a response body.

---

## Update Kubernetes Connection

Updates Kubernetes connection.

<!-- omit in toc -->
### PUT /api/session/data/{{data_source}}/connections/{{connection}}

#### Headers

- Content-Type (string, required) - application/json

#### Path Parameters

- data_source (string, required) - Data source
- connection (integer, required) - Connection identifier

#### Query Parameters

- token (string, required) - Auth Token

#### Request Body

**@TODO**

```json
{
  "parentIdentifier": "ROOT",
  "name": "test",
  "identifier": "1",
  "activeConnections": 0,
  "protocol": "kubernetes",
  "parameters": {
    "port": "",
    "read-only": "",
    "swap-red-blue": "",
    "cursor": "",
    "color-depth": "",
    "clipboard-encoding": "",
    "disable-copy": "",
    "disable-paste": "",
    "dest-port": "",
    "recording-exclude-output": "",
    "recording-exclude-mouse": "",
    "recording-include-keys": "",
    "create-recording-path": "",
    "enable-sftp": "",
    "sftp-port": "",
    "sftp-server-alive-interval": "",
    "enable-audio": "",
    "use-ssl": "",
    "ignore-cert": "",
    "color-scheme": "",
    "font-size": "",
    "scrollback": "",
    "backspace": "",
    "create-typescript-path": "",
    "hostname": "",
    "ca-cert": "",
    "namespace": "",
    "pod": "",
    "container": "",
    "client-cert": "",
    "client-key": "",
    "font-name": "",
    "typescript-path": "",
    "typescript-name": "",
    "recording-path": "",
    "recording-name": ""
  },
  "attributes": {
    "max-connections": "",
    "max-connections-per-user": "",
    "weight": "",
    "failover-only": "",
    "guacd-port": "",
    "guacd-encryption": "",
    "guacd-hostname": ""
  }
}
```

### Response

#### Status Code

- 204 - No Content

#### Response Body

This request does not return a response body.

---

## Delete Connection

Deletes given connection.

<!-- omit in toc -->
### DELETE /api/session/data/{{data_source}}/connections/{{connection}}

#### Headers

None.

#### Path Parameters

- data_source (string, required) - Data source
- connection (integer, required) - Connection identifier

#### Query Parameters

- token (string, required) - Auth token

#### Request Body

None.

### Response

#### Status Code

- 204 - No Content

#### Response Body

This request does not return a response body.

---

[Back to Top](#connections)