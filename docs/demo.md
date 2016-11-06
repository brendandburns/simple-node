## Demo Script

### Prerequisites
You have a working kubernetes cluster and `kubectl` is setup.  You can validate
that `kubectl` is working by running:
```console
kubectl get nodes
```

You have cloned this repository:
```console
git clone https://github.com/brendandburns/simple-node
```

### Setup
Create a new git branch
```console
git checkout -b demo-branch
```

Open up the repo in VS-Code:
```console
code .
```

### Step one
Build and push the image:
```console
git describe --always --dirty
docker build -t brendanburns/simple-node:`git describe --always --dirty` .
docker push brendanburns/simple-node:`git describe --always --dirty`
```

### Step two
Run the image in kubernetes, press `ctrl-shift-p` to open up the command menu
in visual studio code, and start typing `Kubernetes Run`

This should launch a deployment named `simple-node`

### Step three
Describe the deployment, press `ctrl-shift-p` and run `Kubernetes Describe`.
When prompted for the name of the object to get, type `deployments/simple-node`. 
This should open up an output window that contains the details of the deployment.

### Step four
Get the data for the deployment, press `ctrl-shift-p` and run `Kubernetes Load`.
When prompted for the name of the object to get, type `deployments/simple-node`.
This should open up the `json` object in a document window.  Save this document.

You can activate API explanations via pressing `ctrl-shift-p` and running
`Kubernetes Explain`.

### Step five
Edit the API object, make `replicas` be `3` and then hit `ctrl-shift-p` and run
`Kubernetes Apply`.

Describe that object again.  `ctrl-shift-p` and `Kubernetes Describe`.  This time
you don't need to type in the object name, it is inferred from the `json`.

### Step six
Expose a service.  Type `ctrl-shift-p` and `Kubernetes Expose`.  Explain that the
port for the service is derived from the `Dockerfile` in this project.

Run `kubectl proxy` and open up
[https://localhost:8001/api/v1/namespaces/default/simple-node/proxy]
(https://localhost:8001/api/v1/namespaces/default/simple-node/proxy)
to see the service.

### Step seven
Commit and add the two `json` files to the git repository.

### Step seven
Edit the `app.js`, change the printed message. Save the file, rebuild the docker image:

Commit these application changes to the git repository.

```console
git describe --always --dirty
docker build -t brendanburns/simple-node:`git describe --always --dirty` .
docker push brendanburns/simple-node:`git describe --always --dirty`
```

Edit the deployment, change the image to the new git hash.  Also remember to delete
the resource version field in the metadata, or the update won't work.

Run `ctrl-shift-p` and `Kubernetes Apply` to roll out the changes.

Go to the proxy
https://localhost:8001/api/v1/namespaces/default/simple-node/proxy]
(https://localhost:8001/api/v1/namespaces/default/simple-node/proxy)
to see your changes.

### Teardown
That's it.  Tear down the demo:

```console
kubectl delete services simple-node
kubectl delete deployments simple-node
git checkout master
git branch -D demo-branch
```