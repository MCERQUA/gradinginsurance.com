#!/usr/bin/env bash
# Generate all images for gradinginsurance.com via HuggingFace FLUX.1-schnell
# Robust: retries up to 4 times, verifies each is a valid image >= 30KB
set -uo pipefail

OUT="/workspace/Websites/gradinginsurance.com/public/images"
mkdir -p "$OUT"

# gen <fname> <prompt> [steps] [width] [height]
gen() {
  local fname="$1"; shift
  local prompt="$1"; shift
  local steps="${1:-4}"; shift || true
  local w="${1:-1024}"; shift || true
  local h="${1:-1024}"; shift || true
  local dest="$OUT/$fname"
  local attempt=0
  while [ $attempt -lt 4 ]; do
    attempt=$((attempt+1))
    echo "[$fname] attempt $attempt (steps=$steps ${w}x${h})..."
    curl -s --max-time 200 \
      https://router.huggingface.co/hf-inference/models/black-forest-labs/FLUX.1-schnell \
      -H "Authorization: Bearer $HF_TOKEN" \
      -H "Content-Type: application/json" \
      -d "$(jq -nc --arg p "$prompt" --argjson s "$steps" --argjson w "$w" --argjson h "$h" '{inputs:$p, parameters:{num_inference_steps:$s, width:$w, height:$h}}')" \
      -o "$dest"
    local ftype; ftype=$(file -b "$dest" 2>/dev/null)
    local sz; sz=$(stat -c%s "$dest" 2>/dev/null || echo 0)
    if echo "$ftype" | grep -qiE "image|jpeg|png" && [ "$sz" -ge 30000 ]; then
      echo "[$fname] OK ($sz bytes, $ftype)"
      return 0
    fi
    echo "[$fname] FAIL (size=$sz, type=$ftype)"
    if echo "$ftype" | grep -qi "text\|json"; then head -c 200 "$dest"; echo ""; fi
    sleep 4
  done
  echo "[$fname] GAVE UP after $attempt attempts"
  return 1
}

# === 13 images — GRADING & EARTHMOVING contractor insurance ===

gen "hero.jpg" \
  "Photorealistic cinematic wide shot of an active grading and earthmoving job site at golden-hour dawn: a large crawler excavator and a bulldozer moving dirt on a site-prep project, scrapers in the background, freshly graded red-brown earth, soft morning light and a faint dust haze, blue sky. Premium commercial construction photography, warm natural colors, no text, no watermark" 4

gen "coverage.jpg" \
  "Photorealistic elevated aerial view of a large mass-grading and site-prep operation: motor graders, scrapers, and bulldozers leveling a sprawling dirt site for a new development, freshly cut and filled earth in neat terraces, blue sky with soft clouds. Clean professional commercial construction photography, no text" 4

gen "about.jpg" \
  "Photorealistic authentic portrait of a friendly grading contractor owner wearing a hard hat, safety vest, and flannel shirt, standing on a dirt-work job site with an excavator and scraper fleet behind, warm natural light, trustworthy genuine expression, shallow depth of field, commercial photography, no text" 4

gen "og-image.jpg" \
  "Photorealistic wide cinematic landscape of a grading and earthmoving job site at sunrise: a bulldozer and an excavator working freshly graded red-brown earth, a scraper fleet in the distance, warm golden light, blue sky. Premium commercial construction photography, clean and inviting, no text, no watermark" 4 1216 640

gen "general-liability.jpg" \
  "Photorealistic photo of a grading contractor job site: an excavator and a bulldozer working on a commercial pad site with freshly graded dirt, a contractor in a hard hat and safety vest reviewing plans with a visitor, warm professional commercial construction photography, no text" 4

gen "workers-compensation.jpg" \
  "Photorealistic photo of earthmoving crew workers wearing hard hats, safety vests, and protective gear safely operating equipment on a dirt-work site, an excavator and skid steer in the background, bright professional commercial construction photography, warm natural light, no text" 4

gen "commercial-auto.jpg" \
  "Photorealistic photo of a heavy dump truck and a lowboy equipment hauler trailer parked at a grading job site staging area, a bulldozer loaded on the lowboy, blue sky, clean heavy commercial vehicles, professional commercial automotive photography, no text" 4

gen "inland-marine.jpg" \
  "Photorealistic close-up of a fleet of heavy earthmoving equipment — a large crawler excavator, a bulldozer, a motor grader, and a scraper — lined up on a graded dirt site, well-maintained yellow iron, warm late-afternoon light, shallow depth of field, professional commercial construction photography, no text" 4

gen "builders-risk.jpg" \
  "Photorealistic photo of a site-prep project under construction: freshly installed underground storm pipe and inlets, compacted base course, and partial curb and paving in progress on a graded dirt site, blue sky, professional commercial civil construction photography, no text" 4

gen "umbrella.jpg" \
  "Photorealistic wide shot of a large-scale grading and earthmoving operation spanning a wide horizon: multiple bulldozers and scrapers working a vast dirt site under a big open sky, sense of scale and coverage, warm professional commercial construction photography, no text" 4

gen "surety-bonds.jpg" \
  "Photorealistic photo of a grading contractor shaking hands with a project developer or inspector on a dirt-work job site, hard hats and safety vests, an excavator working in the background, warm trustworthy professional commercial photography, no text" 4

gen "grading-crew.jpg" \
  "Photorealistic photo of an earthmoving crew standing confidently with their equipment — an excavator, a bulldozer, and a motor grader — on a freshly graded dirt site at the end of the day, warm golden light, professional commercial construction team photography, no text" 4

gen "job-site.jpg" \
  "Photorealistic cinematic shot of an active grading job site at dusk: an excavator silhouette against a warm orange sky, freshly graded earth, a water truck suppressing dust, atmospheric and industrial, premium commercial construction photography, no text, no watermark" 4

echo "=== ALL IMAGE GENERATION ATTEMPTS COMPLETE ==="
ls -la "$OUT"
