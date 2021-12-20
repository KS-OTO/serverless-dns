/*
 * Copyright (c) 2021 RethinkDNS and its authors.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

export function isWorkers() {
  return env && env.runTimeEnv === "worker";
}

export function isNode() {
  return env && env.runTimeEnv === "node";
}
