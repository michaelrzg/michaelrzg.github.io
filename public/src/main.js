import * as THREE from "/node/three/build/three.module.js";
import { LoadGLTFByPath } from "/public/src/Helpers/ModelHelper.js";
import { OrbitControls } from "/node/three/examples/jsm/controls/OrbitControls.js";
import { InteractionManager } from "/node/three.interactive/build/three.interactive.js";
import * as TWEEN from "../../node/@tweenjs/tween.js/dist/tween.esm.js";

//animate function
const animate = (t) => {
  vidTexture.update();
  hometext.update();
  banText.update();
  controls.update();
  renderer.render(scene, camera);
  interactionManager.update();
  TWEEN.update(t);
  requestAnimationFrame(animate);

  //console.log(camera.position)
};

/*retrieve list of all cameras*/
function retrieveListOfCameras(scene) {
  // Get a list of all cameras in the scene
  scene.traverse(function (object) {
    if (object.isCamera) {
      cameraList.push(object);
    }
  });

  updateCameraAspect(camera);
  controls.update();
}

/*Set the camera aspect ratio to match the browser window dimensions*/
function updateCameraAspect(camera) {
  const width = window.innerWidth;
  const height = window.innerHeight;
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
}

/*function to create generic cube mesh object*/
function createCube({ color, x, y, z }) {
  const geometry = new THREE.PlaneGeometry(3, 1.5);
  const material = new THREE.MeshLambertMaterial({ color });
  const cube = new THREE.Mesh(geometry, material);
  cube.position.set(x, y, z);

  return cube;
}

/*function to create generic rectangle mesh object*/
function createRect({ color, x, y, z }) {
  const geometry = new THREE.BoxGeometry(1.5, 2, 1);
  const material = new THREE.MeshLambertMaterial({ color });
  const cube = new THREE.Mesh(geometry, material);
  cube.position.set(x, y, z);

  return cube;
}

/*function to create card object*/
function createCard({ color, x, y, z }) {
  const geometry = new THREE.BoxGeometry(0.8, 0.6, 0.8);
  const material = new THREE.MeshLambertMaterial({ color });
  const cube = new THREE.Mesh(geometry, material);
  cube.position.set(x, y, z);

  return cube;
}

/* partent function to move to newsStand
depending on the current camera state, will invoke corresponding function
to ensure smooth transition*/
function moveToNews() {
  aboutButton.style.display = "none";
  document.getElementById("abt").style.display = "block";

  if (state != 3) {
    toggleAllOff();
    controls.enableRotate = false;
    if (state == 1) {
      moveToNewsFromStand();
    } else if (state == 2 || state == 5) {
      moveToNewsFromVending();
    } else {
      controls.autoRotateSpeed = 0;
      new TWEEN.Tween(camera.position)
        .to(newsStandPosition, 1000)
        .easing(TWEEN.Easing.Linear.None)
        .onUpdate((coords) => {
          camera.position.set(coords.x, coords.y, coords.z);
        })
        .start();
    }

    state = 3;
  }
}

/* animaton to move to table with business card */
function moveToBusinessCard() {
  controls.enableRotate = false;
  controls.autoRotateSpeed = 0;
  toggleAllOff();
  document.getElementById("bis").style.display = "block";
  //controls.target = new THREE.Vector3(-3,.8,-6)
  new TWEEN.Tween(controls.target)
    .to(businessCard.position, 1000)
    .easing(TWEEN.Easing.Linear.None)
    .onUpdate((coords) => {
      controls.target.set(coords.x, coords.y, coords.z);
    })
    .start();
  new TWEEN.Tween(camera.position)
    .to(businessCardPosition, 1000)
    .easing(TWEEN.Easing.Linear.None)
    .onUpdate((coords) => {
      camera.position.set(coords.x, coords.y, coords.z);
    })
    .start();
  state = 4;
  if (buttonsRevealed >= 4) {
    revealButton.style.display = "none";
  }
}

/* animation to move to resume stand/sign */
function moveToSign() {
  toggleAllOff();
  controls.enableRotate = false;
  if (state == 2) {
    moveToSignFromVending();
  } else if (state == 3) {
  } else {
    console.log("sign was clicked");
    controls.autoRotateSpeed = 0;
    new TWEEN.Tween(camera.position)
      .to(signPosition, 1000)
      .easing(TWEEN.Easing.Linear.None)
      .onUpdate((coords) => {
        camera.position.set(coords.x, coords.y, coords.z);
      })
      .start();
  }
  state = 1;
}

/* animiation from resumesign to vendingmachine*/
function moveToSignFromVending() {
  const i = new THREE.Vector3(-14.32, 2.02, 6.975);
  console.log("Vending clicked");
  controls.autoRotateSpeed = 0;
  new TWEEN.Tween(camera.position)
    .to(startPosition, 1000)
    .easing(TWEEN.Easing.Linear.None)
    .onUpdate((coords) => {
      camera.position.set(coords.x, coords.y, coords.z);
    })
    .chain(
      new TWEEN.Tween(camera.position)
        .to(signPosition, 1000)
        .easing(TWEEN.Easing.Linear.None)
        .onUpdate((coords) => {
          camera.position.set(coords.x, coords.y, coords.z);
        })
    )
    .start();
}

/* animation from vending to newsstand*/
function moveToVendingFromNews() {
  const i = new THREE.Vector3(-14.32, 2.02, 6.975);
  console.log("Vending clicked");
  controls.autoRotateSpeed = 0;
  new TWEEN.Tween(camera.position)
    .to(i, 1000)
    .easing(TWEEN.Easing.Linear.None)
    .onUpdate((coords) => {
      camera.position.set(coords.x, coords.y, coords.z);
    })
    .chain(
      new TWEEN.Tween(camera.position)
        .to(vendingPosition, 1000)
        .easing(TWEEN.Easing.Linear.None)
        .onUpdate((coords) => {
          camera.position.set(coords.x, coords.y, coords.z);
        })
    )
    .start();
  state = 2;
}

/* animation from newsstand to vendng machine */
function moveToNewsFromVending() {
  const i = new THREE.Vector3(-14.32, 2.02, 6.975);
  console.log("Vending clicked");
  controls.autoRotateSpeed = 0;
  new TWEEN.Tween(camera.position)
    .to(i, 1000)
    .easing(TWEEN.Easing.Linear.None)
    .onUpdate((coords) => {
      camera.position.set(coords.x, coords.y, coords.z);
    })
    .chain(
      new TWEEN.Tween(camera.position)
        .to(newsStandPosition, 1000)
        .easing(TWEEN.Easing.Linear.None)
        .onUpdate((coords) => {
          camera.position.set(coords.x, coords.y, coords.z);
        })
    )
    .start();
  state = 3;
}

/* animation between newsstand and resumestand */
function moveToNewsFromStand() {
  const i = new THREE.Vector3(-14.32, 2.02, 6.975);
  new TWEEN.Tween(camera.position)
    .to(startPosition, 1000)
    .easing(TWEEN.Easing.Linear.None)
    .onUpdate((coords) => {
      camera.position.set(coords.x, coords.y, coords.z);
    })
    .chain(
      new TWEEN.Tween(camera.position)
        .to(i, 1000)
        .easing(TWEEN.Easing.Linear.None)
        .onUpdate((coords) => {
          camera.position.set(coords.x, coords.y, coords.z);
        })
        .chain(
          new TWEEN.Tween(camera.position)
            .to(newsStandPosition, 1000)
            .easing(TWEEN.Easing.Linear.None)
            .onUpdate((coords) => {
              camera.position.set(coords.x, coords.y, coords.z);
            })
        )
    )
    .start();
}

/* animation between vending and newsstand */
function moveToVendingFromStand() {
  const i = new THREE.Vector3(18.1, 8.4, 2.27);
  console.log("Vending clicked");
  controls.autoRotateSpeed = 0;
  new TWEEN.Tween(camera.position)
    .to(i, 1000)
    .easing(TWEEN.Easing.Linear.None)
    .onUpdate((coords) => {
      camera.position.set(coords.x, coords.y, coords.z);
    })
    .chain(
      new TWEEN.Tween(camera.position)
        .to(vendingPosition, 1000)
        .easing(TWEEN.Easing.Linear.None)
        .onUpdate((coords) => {
          camera.position.set(coords.x, coords.y, coords.z);
        })
    )
    .start();
  state = 2;
}

/* animates camera to move to vending machine */
function moveToVending() {
  controls.enableRotate = false;
  controls.target = new THREE.Vector3(-5.5, 1, -1.3);
  projectsButton.style.display = "none";
  if (state == 3) {
    moveToVendingFromNews();
  } else if (state == 1) {
    moveToVendingFromStand();
  } else {
    console.log("Vending clicked");
    controls.autoRotateSpeed = 0;
    new TWEEN.Tween(camera.position)
      .to(vendingPosition, 1000)
      .easing(TWEEN.Easing.Linear.None)
      .onUpdate((coords) => {
        camera.position.set(coords.x, coords.y, coords.z);
      })
      .start();
  }
  state = 2;
  toggleAllOff();
  document.getElementById("proj").style.display = "block";
}

/* animates the camera to move back to original position */
function moveHome() {
  controls.enableRotate = true;
  controls.target = new THREE.Vector3(-5.5, 1, -1.3);
  controls.autoRotateSpeed = 0.2;
  controls.autoRotateSpeed *= -1;
  new TWEEN.Tween(camera.position)
    .to(startPosition, 1000)
    .easing(TWEEN.Easing.Quadratic.In)
    .onUpdate((coords1) => {
      camera.position.set(coords1.x, coords1.y, coords1.z);
    })
    .start();
  state = 0;
  toggleRevealed();
}

/* animates the camera to move to the large screen */
function moveToScreen() {
  //controls.target = screenView.position
  new TWEEN.Tween(controls.target)
    .to(screenView.position, 1000)
    .easing(TWEEN.Easing.Linear.None)
    .onUpdate((coords) => {
      controls.target.set(coords.x, coords.y, coords.z);
    })
    .start();
  new TWEEN.Tween(camera.position)
    .to(screenPositon, 1000)
    .easing(TWEEN.Easing.Linear.None)
    .onUpdate((coords) => {
      camera.position.set(coords.x, coords.y, coords.z);
    })
    .start();
}

/* animates the camera to move to the retro TV */
function moveToTv() {
  new TWEEN.Tween(controls.target)
    .to(tvView.position, 1000)
    .easing(TWEEN.Easing.Linear.None)
    .onUpdate((coords) => {
      controls.target.set(coords.x, coords.y, coords.z);
    })
    .start();
  new TWEEN.Tween(camera.position)
    .to(tvPositon, 1000)
    .easing(TWEEN.Easing.Linear.None)
    .onUpdate((coords) => {
      camera.position.set(coords.x, coords.y, coords.z);
    })
    .start();
}

/*function to cause thread to sleep*/
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/* internal function called when loading percentage hits 100% */
function stopLoading() {
  document.getElementById("background").style.display = "block";
  document.getElementById("startbutton").style.display = "block";
  document.getElementById("reveal").style.display = "block";
  document.getElementById("text").style.display = "block";
  document.getElementById("load").style.display = "none";
  document.getElementById("emailME").style.display = "block";
}

/* Simply toggles all elements off */
function toggleAllOff() {
  document.getElementById("emailME").style.display = "none";
  document.getElementById("reveal").style.display = "none";
  aboutButton.style.display = "none";
  resumeButton.style.display = "none";
  projectsButton.style.display = "none";
  contactButton.style.display = "none";
  document.getElementById("res").style.display = "none";
  document.getElementById("abt").style.display = "none";
  document.getElementById("proj").style.display = "none";
  document.getElementById("bis").style.display = "none";
}

/* Toggles all previously revealed elements.
First checks if all elements are previously revaled and simply revels them all
else check each element and manually reveal them and hide their sublinks. */
function toggleRevealed() {
  document.getElementById("emailME").style.display = "block";
  if (allreaveled) {
    revealButton.style.display = "none";
    aboutButton.style.display = "block";
    resumeButton.style.display = "block";
    projectsButton.style.display = "block";
    contactButton.style.display = "block";
    document.getElementById("res").style.display = "none";
    document.getElementById("abt").style.display = "none";
    document.getElementById("proj").style.display = "none";
    document.getElementById("bis").style.display = "none";
  } else {
    if (aboutRevealed) {
      aboutButton.style.display = "block";
      document.getElementById("abt").style.display = "none";
    }
    if (resumeRevealed) {
      resumeButton.style.display = "block";
      document.getElementById("res").style.display = "none";
    }
    if (projectsRevelased) {
      projectsButton.style.display = "block";
      document.getElementById("proj").style.display = "none";
    }
    if (contactRevealed) {
      contactButton.style.display = "block";
      document.getElementById("bis").style.display = "none";
    }
    if (buttonsRevealed >= 4) {
      revealButton.style.display = "none";
      allreaveled = true;
    } else {
      revealButton.style.display = "block";
    }
  }
}

/* main body of code */

/* create and intilize WebGL renderer to render 3d scene */
let renderer = new THREE.WebGLRenderer({
  //Defines the canvas component in the DOM that will be used
  canvas: document.querySelector("#background"),
  antialias: true,
});

/* default settings for threejs.org/editor - revision r153 */
renderer.shadows = true;
renderer.shadowType = 1;
renderer.shadowMap.enabled = true;
renderer.setPixelRatio(window.devicePixelRatio);
renderer.toneMapping = 0;
renderer.toneMappingExposure = 1;
renderer.useLegacyLights = false;
renderer.toneMapping = THREE.NoToneMapping;
renderer.setClearColor(0xffffff, 0);
renderer.outputColorSpace = THREE.SRGBColorSpace;
document.body.appendChild(renderer.domElement);
/* set up loading manager to visualize loading screen and percentage*/

/* onProgress = update percentage on loading screen */
/* onLoad = call stopLoading() to hide loading screen and display content */
let percent = 0;
let strper = "";
THREE.DefaultLoadingManager.onProgress = function (
  url,
  itemsLoaded,
  itemsTotal
) {
  percent = (itemsLoaded / itemsTotal) * 100;
  percent = parseInt(percent);
  strper = percent.toString();
  document.getElementById("progress").innerHTML = strper + "%";
};
THREE.DefaultLoadingManager.onLoad = function () {
  stopLoading();
};
renderer.setSize(window.innerWidth, window.innerHeight);

/* creating scene*/
const scene = new THREE.Scene();

/* creating and initilizing camera */
let camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  1,
  10000
);
camera.position.set(300, 150, 80);
let cameraList = [];

/* loading the blender GLTF model */
LoadGLTFByPath(scene)
  .then(() => {
    retrieveListOfCameras(scene);
  })
  .catch((error) => {
    console.error("Error loading JSON scene:", error);
  });

/* creating and adding videotexture for retrotv on picnic table*/
const vidFile = document.getElementById("vid");
const vidTexture = new THREE.VideoTexture(vidFile);
const videoMaterial = new THREE.MeshBasicMaterial({
  map: vidTexture,
  side: THREE.FrontSide,
  toneMapped: false,
});
const vidPlayer = new THREE.PlaneGeometry(1.05, 0.8);
const video = new THREE.Mesh(vidPlayer, videoMaterial);
video.rotateY(8.4);
video.position.set(-7.64, 1.7, -6.32);
scene.add(video);
vidTexture.needsUpdate = true;
document.getElementById("vid").play();

/* creating and adding videotexture for large roof screen*/
const bannerFile = document.getElementById("banner");
const banText = new THREE.VideoTexture(bannerFile);
const banMat = new THREE.MeshBasicMaterial({
  map: banText,
  side: THREE.FrontSide,
  toneMapped: false,
});
const banPlayer = new THREE.PlaneGeometry(4.7, 2);
const mainBanner = new THREE.Mesh(banPlayer, banMat);
mainBanner.rotateY(7.86);
mainBanner.position.set(-5.7, 6.45, -0.7);
scene.add(mainBanner);
banText.needsUpdate = true;
/*playing the video*/
document.getElementById("banner").play();

/*creating and adding videotexture for vending machine using vendHome video linked in index.html*/
const home = document.getElementById("vendHome");
const hometext = new THREE.VideoTexture(home);
const homemat = new THREE.MeshBasicMaterial({
  map: hometext,
  side: THREE.FrontSide,
  toneMapped: false,
});
const homeplay = new THREE.PlaneGeometry(0.9, 1.6);
const homeVending = new THREE.Mesh(homeplay, homemat);
homeVending.position.set(-4.45, 1.7, 3.4);
scene.add(homeVending);
hometext.needsUpdate = true;
/*playing the video*/
document.getElementById("vendHome").play();

/* creating and initilizing controls for orbital camera */
let controls = new OrbitControls(camera, renderer.domElement);
controls.maxPolarAngle = Math.PI / 2;
controls.rotateSpeed = 0.3;
controls.maxDistance = 23;
controls.target = new THREE.Vector3(-5.5, 1, -1.3);
controls.enableZoom = false;
controls.enablePan = false;
controls.autoRotate = true;
controls.autoRotateSpeed = 0.2;
controls.autoRotateSpeed *= -1;

/* creating resume sign geometry, adding, and storing position */
let sign = createRect({ color: 0x0065d9, x: -3, y: 1, z: -2.85 });
sign.rotateY(90);
sign.visible = false;
scene.add(sign);
const signPosition = new THREE.Vector3(-1.88, 1.1, -3.89);

/* creating vending machine geometry, adding, and storing position */
const vendG = new THREE.BoxGeometry(1.5, 2.5, 1);
const vendM = new THREE.MeshLambertMaterial(0x0065d9);
const vending = new THREE.Mesh(vendG, vendM);
vending.position.set(-4.4, 1.3, 3.1);
vending.visible = false;
scene.add(vending);
const vendingPosition = new THREE.Vector3(-4.078, 2, 5.5);

/* creating news stand geometry, adding, and storing position */
const newG = new THREE.BoxGeometry(0.5, 2, 1);
const newM = new THREE.MeshLambertMaterial(0x0065d9);
const newsStand = new THREE.Mesh(newG, newM);
newsStand.position.set(-9.9, 1.2, 0.5);
newsStand.visible = false;
scene.add(newsStand);
const newsStandPosition = new THREE.Vector3(-10.85, -1, 0.75);

/*create business card geometry, add it to scene, and store location */
let businessCard = createCard({ color: 0x0065d9, x: -2.9, y: 1.1, z: -6 });
businessCard.visible = false;
scene.add(businessCard);
const businessCardPosition = new THREE.Vector3(-2.5, 2.46, -5.72);

/* creating flags for each element to track if they have been revealed*/
var buttonsRevealed = 0;
let allreaveled = false;
var aboutRevealed = false;
var resumeRevealed = false;
var projectsRevelased = false;
var contactRevealed = false;
const startPosition = new THREE.Vector3(300, 150, 110);
/* creating state variable to hold cameras current state. (starts at home)
0: home
1: resume
2: projects
3: about
*/
let state = 0;

/* creating, positioning, and adding large display on roof geometry */
const screeng = new THREE.BoxGeometry(1, 3, 5.5);
const screenm = new THREE.MeshLambertMaterial(0x0065d9);
const screenView = new THREE.Mesh(screeng, screenm);
screenView.visible = false;
scene.add(screenView);
screenView.position.set(-5.6, 6.9, -0.8);

const screenPositon = new THREE.Vector3(2.029, 6.9, -0.308);

/* creating, positioning, and adding retro tv geometry on picnic table*/
const tvg = new THREE.BoxGeometry(1.45, 1.45, 1.45);
const tvnm = new THREE.MeshLambertMaterial(0x0065d9);
const tvView = new THREE.Mesh(tvg, tvnm);
scene.add(tvView);
tvView.visible = false;
tvView.position.set(-7.9, 1.6, -6.2);

/*adding event listeners and what to do when each element is clicked */
screenView.addEventListener("click", (event) => {
  console.log("screen clicked");
  moveToScreen();
});
tvView.addEventListener("click", (event) => {
  console.log("tv clicked");
  moveToTv();
});
const tvPositon = new THREE.Vector3(-5.604, 1.9747, -7.85);
var homebutton = document.getElementById("startbutton");
homebutton.addEventListener("click", (event) => {
  moveHome();
});
var resumeButton = document.getElementById("resume");
resumeButton.addEventListener("click", (event) => {
  moveToSign();
  document.getElementById("res").style.display = "block";
});
var projectsButton = document.getElementById("projects");
projectsButton.addEventListener("click", (event) => {
  moveToVending();
});

var aboutButton = document.getElementById("about");
aboutButton.addEventListener("click", (event) => {
  state = 5;
  moveToNews();
});

var contactButton = document.getElementById("contact");
contactButton.addEventListener("click", (event) => {
  moveToBusinessCard();
});

var revealButton = document.getElementById("reveal");
revealButton.addEventListener("click", (event) => {
  allreaveled = true;
  aboutButton.style.display = "block";
  resumeButton.style.display = "block";
  projectsButton.style.display = "block";
  contactButton.style.display = "block";
  revealButton.style.display = "none";
});

sign.addEventListener("click", (event) => {
  if (!resumeRevealed) {
    buttonsRevealed++;
    resumeRevealed = true;
  }
  moveToSign();
  resumeButton.style.display = "none";
  document.getElementById("res").style.display = "block";
  if (buttonsRevealed >= 4) {
    revealButton.style.display = "none";
  }
});

vending.addEventListener("click", (event) => {
  if (!projectsRevelased) {
    buttonsRevealed++;
    projectsRevelased = true;
  }
  moveToVending();
  projectsButton.style.display = "block";
  if (buttonsRevealed >= 4) {
    revealButton.style.display = "none";
  }
});
newsStand.addEventListener("click", (event) => {
  aboutButton.style.display = "none";
  document.getElementById("abt").style.display = "block";
  if (!aboutRevealed) {
    buttonsRevealed++;
    aboutRevealed = true;
  }
  moveToNews();
});
businessCard.addEventListener("click", (event) => {
  if (!contactRevealed) {
    buttonsRevealed++;
    contactRevealed = true;
  }
  moveToBusinessCard();
});
/* end of adding event listeners*/

/* create interaction manager to manage clicks*/
const interactionManager = new InteractionManager(
  renderer,
  camera,
  renderer.domElement
);

/*add all clickable objects to interaction manager */
interactionManager.add(sign);
interactionManager.add(vending);
interactionManager.add(newsStand);
interactionManager.add(businessCard);
interactionManager.add(screenView);
interactionManager.add(tvView);

/*adding collision walls*/
//next three lines create backwall mesh
var backwallGeo = new THREE.BoxGeometry(7, 5, 0.5);
const backwallMesh = new THREE.MeshDepthMaterial(0xff0000);
const backwall = new THREE.Mesh(backwallGeo, backwallMesh);
//add backwall to scene to be rendered
scene.add(backwall);
//set backwall visable for debug purposes
backwall.visible = false;
//eventlistener to know when backwall is clicked
backwall.addEventListener("click", (event) => {
  console.log("Backwall clicked");
  //stopPropagation to prevent another eventlister from firing if wall is clicked
  //so that no clicking through walls can occur
  event.stopPropagation();
});
//add backwall to interaction manager
interactionManager.add(backwall);
//positioning for backwall
backwall.rotateY(1.5708);
backwall.position.set(-9.55, 1.5, -1);

//same as above for vendinwall (leftmost wall)
var vendwallG = new THREE.BoxGeometry(6.5, 4, 0.5);
const vendwallM = new THREE.MeshDepthMaterial(0xff0000);
const vendWall = new THREE.Mesh(vendwallG, vendwallM);
scene.add(vendWall);
vendWall.visible = false;
vendWall.position.set(-6.7, 2, 2.5);
vendWall.addEventListener("click", (event) => {
  console.log("Vendwall / leftwall clicked");
  event.stopPropagation();
});
interactionManager.add(vendWall);

// same for right wall (near retro tv)
var rightWG = new THREE.BoxGeometry(4.5, 4, 0.5);
const rightWM = new THREE.MeshDepthMaterial(0xff0000);
const rightwall = new THREE.Mesh(rightWG, rightWM);
scene.add(rightwall);

rightwall.visible = false;
rightwall.position.set(-7.4, 2, -4.7);
rightwall.addEventListener("click", (event) => {
  console.log("rightwall clicked");
  event.stopPropagation();
});
interactionManager.add(rightwall);

//and finally for roof
var roofg = new THREE.BoxGeometry(7, 8, 0.5);
const roofm = new THREE.MeshDepthMaterial(0xff0000);
const roof = new THREE.Mesh(roofg, roofm);
scene.add(roof);

roof.visible = false;
roof.rotateX(1.5708);
roof.position.set(-6.7, 5, -1);
roof.recieveShadows = true;
roof.addEventListener("click", (event) => {
  console.log("roof clicked");
  //stopPropagation to prevent another eventlister from firing if wall is clicked
  //so that no clicking through walls can occur
  event.stopPropagation();
});
interactionManager.add(roof);
/* end of adding collision walls*/

/*finally, animate*/
animate();

/*end of main*/
